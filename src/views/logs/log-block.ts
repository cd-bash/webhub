import { writeParagraph, writeTitle } from "../utils";
import { parseMarkdown } from "../utils/markdown-parser";

export type ContentBlock = 
    | { type: 'paragraphs'; data: string[] }
    | { type: 'intro'; data: string[] }
    | { type: 'bulletPoints'; data: string[] }
    | { type: 'title'; data: { level: 'h2' | 'h3' | 'h4' | 'h5' | 'h6' ; text: string } }
    | { type: 'codeImage'; data: { src: string; alt: string; caption?: string } }
    | { type: 'images'; data: { images: Array<{ src: string; alt: string }>; caption?: string } }
    | { type: 'quote'; data: { text: string; author?: string } }
    | { type: 'code'; data: { code: string; language?: string } }
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
            return writeTitle(block.data.level, block.data.text);
        case 'codeImage':
            return imageBlock(block.data);
        default:
            return null;
    }
}

//-----------------------------------------------------------------------

function paragraphsBlock(data: string[], intro = false) {
    const container = document.createElement('div');
    container.className = 'paragraph-section';

    if (intro) {
        container.classList.add('intro');
    }

    data.forEach(text => {
        container.appendChild(writeParagraph(text));
    });

    return container;
}

function imageBlock(data: { src: string; alt: string; caption?: string; }) {
    const container = document.createElement('div');
    container.className = 'image-block';

    const img = document.createElement('img');
    img.src = data.src;
    img.alt = data.alt;
    img.className = 'code';

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