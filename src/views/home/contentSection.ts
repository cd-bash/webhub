import { GRID_CONFIG } from '../../components/pixel-grid';
import { createMainButton, MainButtonOptions } from '../utils/';
import {createWrapper, writeParagraph, writeTitle} from "../utils";
import { createPixelGridBackground, createVideoBackground } from '../utils/backgrounds-utils';

const pixelGridConfigs: GRID_CONFIG = {
    rows: 6,
    colors: ['#0f0f0f', '#2a2a2a', '#181818']
}

export type SectionContent = {
    readonly sectionBG: string;
    readonly sectionBgWebem: string;
    readonly sectionBgMp4: string;
    readonly introTitle?: string;  
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
    
    section.className = `content-section ${content.alignment}`;
    //section.style.backgroundImage = `url('${content.sectionBG}')`;
    section.appendChild(createPixelGridBackground(content.alignment, pixelGridConfigs));
    
    if (content.introTitle) {
        article.appendChild(introTitle(content.introTitle));
    }

    article.appendChild(writeTitle("h2", content.header));
    article.appendChild(sectionParagraphs(content.paragraphs));
    article.appendChild(sectionButtons(content.buttons));

    wrapper.appendChild(article);
    
    const videoBg = movingBackground(content.sectionBgWebem, content.sectionBgMp4);
    section.appendChild(videoBg);
    section.appendChild(wrapper);
    
    // Set up scroll-driven video scrubbing
    setupVideoOnScroll(section, videoBg);
    
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

function sectionButtons(contentButtons: MainButtonOptions[]) {
    const buttonsContainer = document.createElement('ul');
    buttonsContainer.className = 'buttons-container';
    
    contentButtons.forEach(buttonOptions => {
        const button = createMainButton(buttonOptions);
        buttonsContainer.appendChild(button);
    });
    return buttonsContainer;
}

function introTitle(text: string) {
    const intro = document.createElement('h3');
    intro.className = 'intro-title';
    intro.innerHTML = text;
    return intro;
}

function movingBackground(webm: string, mp4: string) {
    const videoBg = createVideoBackground(webm, mp4, true);

    return videoBg;
}

function setupVideoOnScroll(section: HTMLElement, videoBg: HTMLVideoElement) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Section is visible, play the video
                videoBg.play().catch(error => {
                    console.log('Video autoplay failed:', error);
                });
            } else {
                // Section is not visible, pause the video
                videoBg.pause();
            }
        });
    }, {
        threshold: 0.5 // Trigger when 50% of the section is visible
    });

    observer.observe(section);
}