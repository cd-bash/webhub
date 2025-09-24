import { GRID_CONFIG } from '../../components/pixel-grid';
import { createPixelGridBackground } from '../utils/backgrounds-utils';
import { AboutSectionContent, createAboutSection } from "./aboutSection";
import { createPixelBannerCTA, CallToActionOptions } from "../../components/call-to-action";
import { aboutContent } from "../../content/about";

const pixelGridConfigs: GRID_CONFIG = {
    rows: 2,
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
    firstSection.appendChild(createPixelGridBackground('full', pixelGridConfigs));
    

    page.appendChild(firstSection);
    page.appendChild(createPixelBannerCTA(aboutContent.ctaBannerA));
    page.appendChild(createAboutSection(aboutContent.path));
    page.appendChild(createAboutSection(aboutContent.initiative));
    page.appendChild(createPixelBannerCTA(aboutContent.ctaBannerB));

    return page;
}

