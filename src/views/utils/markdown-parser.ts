/**
 * Parses markdown-like syntax and converts it to HTML
 * Supported syntax:
 * - **bold text** → <strong>bold text</strong>
 * - *italic text* → <em>italic text</em>
 * - [link text](url) → <a href="url" target="_blank">link text</a>
 * - `inline code` → <code>inline code</code>
 * - ~~strikethrough~~ → <del>strikethrough</del>
 */
export function parseMarkdown(text: string): string {
    return text
        // Bold text: **text** → <strong>text</strong>
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        
        // Italic text: *text* → <em>text</em> (but not inside ** patterns)
        .replace(/(?<!\*)\*([^*]+?)\*(?!\*)/g, '<em>$1</em>')
        
        // Links: [text](url) → <a href="url" target="_blank">text</a>
        .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>')
        
        // Inline code: `code` → <code>code</code>
        .replace(/`([^`]+)`/g, '<code>$1</code>')
        
        // Strikethrough: ~~text~~ → <del>text</del>
        .replace(/~~(.*?)~~/g, '<del>$1</del>')
        
        // Line breaks: double space at end of line → <br>
        .replace(/  \n/g, '<br>\n');
}

// =============================================================================
// ARTICLE PARSER
// =============================================================================

import { LogArticleContentStructure, LogArticleHeader } from '../logs/log-article';
import { ContentBlock } from '../logs/log-block';
import { LogArticleMetadata } from '../../content/logs';
import { formatDate } from './date-utils';

interface MarkdownArticleParserOptions {
    metadata: LogArticleMetadata;
    headerImage?: string;
    assets?: Record<string, string>;
    headerDate?: string;
}

/**
 * Parses a full markdown document into a LogArticleContentStructure
 * 
 * Supported Markdown syntax:
 * - # ## ### #### ##### ###### (Headers)
 * - **bold** and *italic* text
 * - [link text](url)
 * - `inline code`
 * - ![alt text](image_key) (images with asset references)
 * - [youtube:videoId|title] (custom YouTube embed syntax)
 * - --- (horizontal divider)
 * - - * + (bullet points)
 * - > (blockquotes)
 * - ``` (code blocks)
 */
export function parseMarkdownArticle(
    markdown: string, 
    options: MarkdownArticleParserOptions
): LogArticleContentStructure {
    const lines = markdown.trim().split('\n');
    const blocks: ContentBlock[] = [];
    
    let i = 0;
    
    while (i < lines.length) {
        const line = lines[i].trim();
        
        // Skip empty lines
        if (!line) {
            i++;
            continue;
        }
        
        // Handle headers (# ## ### etc.)
        if (line.startsWith('#')) {
            const headerLevel = getHeaderLevel(line);
            const headerText = line.replace(/^#+\s*/, '');
            
            if (headerLevel >= 2) { // h2 and below become title blocks
                blocks.push({
                    type: 'title',
                    data: { 
                        level: `h${headerLevel}` as 'h2' | 'h3' | 'h4' | 'h5' | 'h6', 
                        text: headerText 
                    }
                });
            }
            i++;
            continue;
        }
        
        // Handle intro paragraphs [intro]
        if (line.startsWith('[intro]')) {
            const introData = parseIntroParagraph(lines, i);
            blocks.push({ type: 'intro', data: introData.paragraphs });
            i = introData.nextIndex;
            continue;
        }
        
        // Handle YouTube embeds [youtube:videoId|title]
        if (line.startsWith('[youtube:')) {
            const youtubeData = parseYouTubeEmbed(line);
            if (youtubeData) {
                blocks.push({ type: 'youtube', data: youtubeData });
            }
            i++;
            continue;
        }
        
        // Handle images ![alt](src)
        if (line.startsWith('![')) {
            const imageData = parseImage(line, options.assets);
            if (imageData) {
                blocks.push({ type: 'image', data: imageData });
            }
            i++;
            continue;
        }
        
        // Handle horizontal dividers ---
        if (line.match(/^---+$/)) {
            blocks.push({ type: 'divider' });
            i++;
            continue;
        }
        
        // Handle bullet points
        if (line.match(/^[\-\*\+]\s/)) {
            const bulletData = parseBulletPoints(lines, i);
            blocks.push({ type: 'bulletPoints', data: bulletData.points });
            i = bulletData.nextIndex;
            continue;
        }
        
        // Handle code blocks ```
        if (line.startsWith('```')) {
            const codeData = parseCodeBlock(lines, i);
            blocks.push({ type: 'code', data: codeData.code });
            i = codeData.nextIndex;
            continue;
        }
        
        // Handle blockquotes >
        if (line.startsWith('>')) {
            const quoteData = parseBlockquote(lines, i);
            blocks.push({ type: 'quote', data: quoteData.quote });
            i = quoteData.nextIndex;
            continue;
        }
        
        // Handle regular paragraphs
        const paragraphData = parseParagraphs(lines, i);
        
        // All paragraphs are regular paragraphs (intro is handled separately with [intro] marker)
        blocks.push({ 
            type: 'paragraphs', 
            data: paragraphData.paragraphs 
        });
        
        i = paragraphData.nextIndex;
    }
    
    return {
        metadata: options.metadata,
        header: createHeader(options),
        articleBlocks: blocks
    };
}

function createHeader(options: MarkdownArticleParserOptions): LogArticleHeader {
    return {
        title: options.metadata.title,
        subtitle: options.metadata.subtitle,
        date: options.headerDate || formatDate(options.metadata.date),
        heroVisual: options.headerImage
    };
}

function getHeaderLevel(line: string): number {
    const match = line.match(/^(#+)/);
    return match ? Math.min(match[1].length, 6) : 1;
}

function parseYouTubeEmbed(line: string): { videoId: string; title?: string } | null {
    const match = line.match(/\[youtube:([^|]+)(?:\|([^\]]+))?\]/);
    if (!match) return null;
    
    return {
        videoId: match[1].trim(),
        title: match[2]?.trim()
    };
}

function parseImage(line: string, assets?: Record<string, string>): { src: string; alt: string; caption?: string; clickable?: boolean } | null {
    // Match ![alt](src) optionally followed by {noclick}
    const match = line.match(/!\[([^\]]*)\]\(([^)]+)\)(\{noclick\})?/);
    if (!match) return null;
    
    const alt = match[1];
    const srcKey = match[2];
    const hasNoClick = match[3] === '{noclick}';
    
    // Check if it's an asset reference
    const src = assets?.[srcKey] || srcKey;
    
    return { 
        src, 
        alt, 
        clickable: !hasNoClick // If {noclick} is present, clickable = false
    };
}

function parseBulletPoints(lines: string[], startIndex: number): { points: string[]; nextIndex: number } {
    const points: string[] = [];
    let i = startIndex;
    
    while (i < lines.length) {
        const line = lines[i].trim();
        
        if (!line) {
            i++;
            break;
        }
        
        if (line.match(/^[\-\*\+]\s/)) {
            points.push(line.replace(/^[\-\*\+]\s/, ''));
            i++;
        } else {
            break;
        }
    }
    
    return { points, nextIndex: i };
}

function parseCodeBlock(lines: string[], startIndex: number): { code: { code: string; language?: string }; nextIndex: number } {
    const startLine = lines[startIndex];
    const language = startLine.replace('```', '').trim() || undefined;
    const codeLines: string[] = [];
    let i = startIndex + 1;
    
    while (i < lines.length && !lines[i].trim().startsWith('```')) {
        codeLines.push(lines[i]);
        i++;
    }
    
    return {
        code: {
            code: codeLines.join('\n'),
            language
        },
        nextIndex: i + 1
    };
}

function parseBlockquote(lines: string[], startIndex: number): { quote: { text: string; author?: string }; nextIndex: number } {
    const quoteLines: string[] = [];
    let i = startIndex;
    let author: string | undefined;
    
    while (i < lines.length) {
        const line = lines[i].trim();
        
        if (!line) {
            i++;
            break;
        }
        
        if (line.startsWith('>')) {
            const content = line.replace(/^>\s?/, '');
            
            // Check if this line contains author attribution (starts with --)
            if (content.startsWith('--')) {
                author = content.replace(/^--\s*/, '');
            } else {
                quoteLines.push(content);
            }
            i++;
        } else {
            break;
        }
    }
    
    return {
        quote: {
            text: quoteLines.join(' '),
            author
        },
        nextIndex: i
    };
}

function parseParagraphs(lines: string[], startIndex: number): { paragraphs: string[]; nextIndex: number } {
    const paragraphs: string[] = [];
    let currentParagraph: string[] = [];
    let i = startIndex;
    
    while (i < lines.length) {
        const line = lines[i].trim();
        
        // Empty line indicates end of paragraph
        if (!line) {
            if (currentParagraph.length > 0) {
                paragraphs.push(currentParagraph.join(' '));
                currentParagraph = [];
            }
            i++;
            continue;
        }
        
        // Check if this line starts a new block type
        if (line.startsWith('#') || 
            line.startsWith('[intro]') ||
            line.startsWith('[youtube:') || 
            line.startsWith('![') || 
            line.match(/^---+$/) || 
            line.match(/^[\-\*\+]\s/) ||
            line.startsWith('```') ||
            line.startsWith('>')) {
            break;
        }
        
        currentParagraph.push(line);
        i++;
    }
    
    // Add final paragraph if exists
    if (currentParagraph.length > 0) {
        paragraphs.push(currentParagraph.join(' '));
    }
    
    return { paragraphs, nextIndex: i };
}

function parseIntroParagraph(lines: string[], startIndex: number): { paragraphs: string[]; nextIndex: number } {
    let currentParagraph: string[] = [];
    let i = startIndex;
    
    // Skip the [intro] marker line
    const firstLine = lines[i].trim();
    if (firstLine.startsWith('[intro]')) {
        // Remove the [intro] marker and get any remaining content on the same line
        const remainingContent = firstLine.replace(/^\[intro\]\s*/, '');
        if (remainingContent) {
            currentParagraph.push(remainingContent);
        }
        i++;
    }
    
    // Continue reading lines until we hit an empty line (end of this paragraph)
    while (i < lines.length) {
        const line = lines[i].trim();
        
        // Empty line indicates end of this intro paragraph - stop here
        if (!line) {
            i++; // Skip the empty line
            break;
        }
        
        // If we hit another block marker, stop (don't include it)
        if (line.startsWith('#') || 
            line.startsWith('[intro]') ||
            line.startsWith('[youtube:') || 
            line.startsWith('![') || 
            line.match(/^---+$/) || 
            line.match(/^[\-\*\+]\s/) ||
            line.startsWith('```') ||
            line.startsWith('>')) {
            break;
        }
        
        currentParagraph.push(line);
        i++;
    }
    
    // Return only the single intro paragraph
    const paragraphs = currentParagraph.length > 0 ? [currentParagraph.join(' ')] : [];
    return { paragraphs, nextIndex: i };
}

