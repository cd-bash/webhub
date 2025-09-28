/* ==========================================================================
   Markdown Parser Utility
   ========================================================================== */

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