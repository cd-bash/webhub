import { createPixelGridBackground } from "../../views/utils/backgrounds-utils";
import { writeTitle, writeParagraph, createWrapper } from "../../views/utils";
import { MainButtonOptions, createMainButton } from "../buttons";

export type CallToActionOptions = {
    header: string;
    body: string;
    buttons: MainButtonOptions[];
    alignment: 'left' | 'right';
}

// --------------------------------------------------------------------------------

export function createPixelBannerCTA(content: CallToActionOptions) {
    const banner = createBanner();
    banner.appendChild(createBackground(content.alignment));
    banner.appendChild(createContent(content));
    return banner;
}

// --------------------------------------------------------------------------------

function createBanner() {
    const banner = document.createElement('div');
    banner.className = 'cta-banner pixel-banner';
    return banner;
}

function createBackground(alignment: 'left' | 'right') {
    const background = document.createElement('div');
    background.className = 'cta-background';
    const emptyAlignment = alignment === 'right' ? 'left' : 'right';
    background.appendChild(createPixelGridBackground(emptyAlignment, {
        rows: 4,
        colors: ['#0f0f0f', '#2a2a2a', '#181818']
    }));
    return background;
}

function createContent(content: CallToActionOptions) {
    const wrapper = createWrapper();
    const article = document.createElement('article');
    article.className = `${content.alignment}`;
    
    article.appendChild(createTextSection(content));
    article.appendChild(createButtonsSection(content.buttons));
    
    wrapper.appendChild(article);
    return wrapper;
}

function createTextSection(content: CallToActionOptions) {
    const container = document.createElement('div');
    container.className = 'text-container';
    container.appendChild(writeTitle("h4", content.header));
    container.appendChild(writeParagraph(content.body));
    return container;
}

function createButtonsSection(buttons: MainButtonOptions[]) {
    const container = document.createElement('ul');
    buttons.forEach(button => {
        container.appendChild(createMainButton(button));
    });
    return container;
}