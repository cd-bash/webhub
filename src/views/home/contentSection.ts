import { GRID_CONFIG } from '../../components/pixel-grid';
import { createMainButton, MainButtonOptions } from '../../components/buttons';
import {createWrapper, writeParagraph, writeTitle} from "../utils";
import { createPixelGridBackground, createVideoBackground } from '../utils/backgrounds-utils';

const pixelGridConfigs: GRID_CONFIG = {
    rows: 6,  // Used for left/right alignments
    colors: ['#0f0f0f', '#2a2a2a', '#181818']
}

const pixelGridConfigsMobile: GRID_CONFIG = {
    columns: 6,  // Used for top alignment (was rows: 4, now more columns for finer detail)
    colors: ['#0f0f0f', '#2a2a2a', '#181818']
}

export type SectionContent = {
    readonly backgrounds: sectionBackgrounds;
    readonly introTitle?: string;  
    readonly header: string;
    readonly paragraphs: string[];
    readonly buttons: MainButtonOptions[];
    readonly alignment: 'left' | 'right';
}

type sectionBackgrounds = {
    readonly image: string;
    readonly webem: string;
    readonly mp4: string;
    readonly mobileWebem: string;
    readonly mobileMp4: string;
}


// --------------------------------------------------------------------------------

export function createContentSection(content: SectionContent) {
    const section = document.createElement('section');
    
    const wrapper = createWrapper();
    const article = document.createElement('article');

    const desktopPixelGrid = createPixelGridBackground(content.alignment, pixelGridConfigs);
    const mobilePixelGrid = createPixelGridBackground('top', pixelGridConfigsMobile);
    desktopPixelGrid.classList.add('desktop-pixel-grid');
    mobilePixelGrid.classList.add('mobile-pixel-grid');

    const desktopVideoBg = createVideoBackground(content.backgrounds.webem, content.backgrounds.mp4, true);
    const mobileVideoBg = createVideoBackground(content.backgrounds.mobileWebem, content.backgrounds.mobileMp4, true);
    desktopVideoBg.classList.add('desktop-bg');
    mobileVideoBg.classList.add('mobile-bg');
    
    
    section.className = `content-section ${content.alignment}`;
    //section.style.backgroundImage = `url('${content.sectionBG}')`;
    section.appendChild(desktopPixelGrid);
    section.appendChild(mobilePixelGrid);
    
    if (content.introTitle) {
        article.appendChild(introTitle(content.introTitle));
    }

    article.appendChild(writeTitle("h2", content.header));
    article.appendChild(sectionParagraphs(content.paragraphs));
    article.appendChild(sectionButtons(content.buttons));

    wrapper.appendChild(article);
    
    section.appendChild(desktopVideoBg);
    section.appendChild(mobileVideoBg);
    section.appendChild(wrapper);
    
    // Set up scroll-driven video scrubbing
    setupVideoOnScroll(section, desktopVideoBg);
    setupVideoOnScroll(section, mobileVideoBg);
    
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