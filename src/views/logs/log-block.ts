import { parseMarkdown } from "../utils/markdown-parser";
import { createClickableImage } from "../../components/clickable-image";

export type ContentBlock = 
    | { type: 'paragraphs'; data: string[] }
    | { type: 'intro'; data: string[] }
    | { type: 'bulletPoints'; data: string[] }
    | { type: 'title'; data: { level: 'h2' | 'h3' | 'h4' | 'h5' | 'h6' ; text: string } }
    | { type: 'image'; data: { src: string; alt: string; caption?: string; clickable?: boolean } }
    | { type: 'quote'; data: { text: string; author?: string } }
    | { type: 'code'; data: { code: string; language?: string } }
    | { type: 'youtube'; data: { videoId: string; title?: string } }
    | { type: 'divider'; data?: null };

//-----------------------------------------------------------------------

export function renderContentBlock(block: ContentBlock): HTMLElement | null {
    switch (block.type) {
        case 'paragraphs':
            return paragraphsBlock(block.data);
        case 'intro':
            return paragraphsBlock(block.data, true);
        case 'bulletPoints':
            return bulletPointsBlock(block.data);
        case 'title':
            return titleBlock(block.data);
        case 'image':
            return imageBlock(block.data);
        case 'youtube':
            return youtubeBlock(block.data);
        case 'quote':
            return quoteBlock(block.data);
        case 'code':
            return codeBlock(block.data);
        case 'divider':
            return dividerBlock();
        default:
            return null;
    }
}

//-----------------------------------------------------------------------

function titleBlock(data: { level: 'h2' | 'h3' | 'h4' | 'h5' | 'h6'; text: string }) {
    const element = document.createElement(data.level);
    element.innerHTML = parseMarkdown(data.text);
    return element;
}

function paragraphsBlock(data: string[], intro = false) {
    const container = document.createElement('div');
    container.className = 'paragraph-section';

    if (intro) {
        container.classList.add('intro');
    }

    data.forEach(text => {
        const p = document.createElement('p');
        p.innerHTML = parseMarkdown(text);
        container.appendChild(p);
    });

    return container;
}

function imageBlock(data: { src: string; alt: string; caption?: string; clickable?: boolean }) {
    const isClickable = data.clickable !== false;
    const container = document.createElement('div');
    container.className = 'image-block';
    
    if (isClickable) {
        container.appendChild(createClickableImage({
            src: data.src,
            alt: data.alt,
            caption: data.caption
        }));

        return container;
    } 
    
    const img = document.createElement('img');
    img.src = data.src;
    img.alt = data.alt;
    container.appendChild(img);

    if (data.caption) {
        const caption = document.createElement('p');
        caption.className = 'caption';
        caption.textContent = data.caption;
        container.appendChild(caption);
    }

    return container;
}

function bulletPointsBlock(data: string[]) {
    const ul = document.createElement('ul');
    ul.className = 'bullet-points';

    data.forEach(text => {
        const li = document.createElement('li');
        li.innerHTML = parseMarkdown(text);
        ul.appendChild(li);
    });

    return ul;
}

function youtubeBlock(data: { videoId: string; title?: string; }) {
    const container = document.createElement('div');
    container.className = 'youtube-block';

    const iframe = document.createElement('iframe');
    iframe.src = `https://www.youtube.com/embed/${data.videoId}`;
    iframe.title = data.title || 'YouTube video player';
    iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
    iframe.allowFullscreen = true;

    container.appendChild(iframe);
    return container;
}

function quoteBlock(data: { text: string; author?: string }) {
    const container = document.createElement('blockquote');
    container.className = 'quote-block';

    const text = document.createElement('p');
    text.innerHTML = parseMarkdown(data.text);
    container.appendChild(text);

    if (data.author) {
        const author = document.createElement('cite');
        author.textContent = data.author;
        container.appendChild(author);
    }

    return container;
}

function codeBlock(data: { code: string; language?: string }) {
    const container = document.createElement('div');
    container.className = 'code-block';

    const pre = document.createElement('pre');
    const code = document.createElement('code');
    
    if (data.language) {
        code.className = `language-${data.language}`;
    }
    
    code.textContent = data.code;
    pre.appendChild(code);
    container.appendChild(pre);

    return container;
}

function dividerBlock() {
    const hr = document.createElement('hr');
    hr.className = 'content-divider';
    return hr;
}