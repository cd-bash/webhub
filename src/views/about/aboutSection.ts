import { writeParagraph, writeTitle, createWrapper } from "../utils";

export type AboutSectionContent = {
    readonly introTitle?: string;
    readonly header: string;
    readonly visualPath?: string;
    readonly paragraphs: string[];
    readonly alignment: 'left' | 'right';
}

// --------------------------------------------------------------------------------

export function createAboutSection(content: AboutSectionContent) {
    const section = document.createElement('section');
    const wrapper = createWrapper();
    const visual = document.createElement('img');
    const article = document.createElement('article');

    section.className = `about-section ${content.alignment}`;

    if (content.introTitle) {
        article.appendChild(introTitle(content.introTitle));
    }

    if (content.visualPath) {
        visual.src = content.visualPath;
        visual.alt = content.header;
    }

    article.appendChild(writeTitle("h2", content.header));
    article.appendChild(sectionParagraphs(content.paragraphs));

    wrapper.appendChild(visual);
    wrapper.appendChild(article);
    section.appendChild(wrapper);
    
    return section;
}

// --------------------------------------------------------------------------------

function sectionParagraphs(paragraphs: string[]) {
    const paragraphsContainer = document.createElement('div');
    paragraphsContainer.className = 'paragraphs-container';
    
    paragraphs.forEach(text => {
        const p = writeParagraph(text);
        paragraphsContainer.appendChild(p);
    });
    return paragraphsContainer;
}

function introTitle(text: string) {
    const intro = document.createElement('h3');
    intro.className = 'intro-title';
    intro.innerHTML = text;
    return intro;
}