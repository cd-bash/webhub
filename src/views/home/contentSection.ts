import { createPixelGrid } from '../../components/pixel-grid';
import { createMainButton, MainButtonOptions } from '../../components/main-button';
import {createWrapper, writeParagraph, writeTitle} from "../utils";

export type SectionContent = {
    readonly sectionBG: string;
    readonly header: string;
    readonly paragraphs: string[];
    readonly buttons: MainButtonOptions[];
    readonly alignment: 'left' | 'right';
}


// --------------------------------------------------------------------------------

export function createContentSection(content: SectionContent) {
    const section = document.createElement('section');
    const wrapper = createWrapper();
    const article = document.createElement('article');
    
    section.className = 'content-section';
    section.style.backgroundImage = `url('${content.sectionBG}')`;
    section.appendChild(pixelGrid(content.alignment));
    
    article.appendChild(writeTitle("h2", content.header));
    article.appendChild(sectionParagraphs(content.paragraphs));
    article.appendChild(sectionButtons(content.buttons));

    wrapper.appendChild(article);
    section.appendChild(wrapper);
    
    return section;
}

// --------------------------------------------------------------------------------

function pixelGrid(contentAlignment: 'left' | 'right') {
    const determineEmptyBias = contentAlignment === 'right' ? 'left' : 'right';
    return createPixelGrid({
        emptyBias: determineEmptyBias,
        emptyRatio: 0.5
    });
}

function sectionParagraphs(paragraphs: string[]) {
    const paragraphsContainer = document.createElement('div');
    paragraphsContainer.className = 'paragraphs-container';
    
    paragraphs.forEach(text => {
        const p = writeParagraph(text);
        paragraphsContainer.appendChild(p);
    });
    return paragraphsContainer;
}

function sectionButtons(contentButtons: MainButtonOptions[]) {
    const buttonsContainer = document.createElement('ul');
    buttonsContainer.className = 'buttons-container';
    
    contentButtons.forEach(buttonOptions => {
        const button = createMainButton(buttonOptions);
        buttonsContainer.appendChild(button);
    });
    return buttonsContainer;
}