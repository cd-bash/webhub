import { GRID_CONFIG } from '../../components/pixel-grid';
import { createPixelGridBackground } from '../utils/backgrounds-utils';
import { AboutSectionContent, createAboutSection } from "./aboutSection";
import { createPixelBannerCTA, CallToActionOptions } from "../../components/call-to-action";
import { aboutContent } from "../../content/about";

const pixelGridConfigs: GRID_CONFIG = {
    columns: 7,  // Used for top alignment (was rows: 2, now more columns for better coverage)
    colors: ['#0f0f0f', '#2a2a2a', '#181818']
}

export type AboutPageContentStructure = {
    readonly manifesto: AboutSectionContent;
    readonly ctaBannerA: CallToActionOptions;
    readonly path: AboutSectionContent;
    readonly initiative: AboutSectionContent;
    readonly ctaBannerB: CallToActionOptions;
}

// --------------------------------------------------------------------------------

export function aboutView() {
    const page = document.createElement('div');
    page.id = 'about-page';

    const firstSection = createAboutSection(aboutContent.manifesto);
    firstSection.classList.add('first-section');
    firstSection.appendChild(createPixelGridBackground('top', pixelGridConfigs));
    
    const secondSection = document.createElement('div');
    secondSection.className = 'second-section';
    secondSection.appendChild(createAboutSection(aboutContent.path));
    secondSection.appendChild(createAboutSection(aboutContent.initiative));


    page.appendChild(firstSection);
    page.appendChild(createPixelBannerCTA(aboutContent.ctaBannerA));
    page.appendChild(secondSection);
    page.appendChild(createPixelBannerCTA(aboutContent.ctaBannerB));

    return page;
}

