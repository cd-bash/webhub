import { createPixelGridBackground, createWrapper, writeTitle } from "../utils";
import { logCard, metadataToLogCard, createEmptyCardsToFill } from "../../components/log-card";
import { logsContent } from "../../content/logs";
import { CallToActionOptions, createPixelBannerCTA } from "../../components/call-to-action";
export * from "./log-article";
export * from "./log-block";

export type logsContentStructure = {
    title: string;
    subtitle: string;
    getAllArticles: () => any[];
    getAllMetadata: () => any[];
    getLatestArticles: (count?: number) => any[];
    callToAction: CallToActionOptions;
}  

// ------------------------------------------------------------------------

export function logsView() {
    const page = document.createElement('div');
    const wrapper = createWrapper();
    const logs = document.createElement('div');
    page.id = 'logs-page';

    const pixelGrid = createPixelGridBackground('top', {
        columns: 10,
        colors: ['#0f0f0f', '#2a2a2a', '#181818']
    });

    wrapper.appendChild(logGrid());
    logs.appendChild(wrapper);

    page.appendChild(pixelGrid);
    page.appendChild(header());
    page.appendChild(logs);
    page.appendChild(createPixelBannerCTA(logsContent.callToAction));

    return page;
}

// ------------------------------------------------------------------------

function header() {
    const header = document.createElement('header');

    const wrapper =createWrapper();
    const titleContainer = document.createElement('div');
    titleContainer.className = 'title-container';

    const title = writeTitle('h1', logsContent.title);
    const subtitle = writeTitle('h2', logsContent.subtitle);

    titleContainer.appendChild(title);
    titleContainer.appendChild(subtitle);
    wrapper.appendChild(titleContainer);
    header.appendChild(wrapper);

    return header;
}

function logGrid() {
    const grid = document.createElement('div');
    grid.className = 'log-grid';

    const articles = logsContent.getAllMetadata();
    
    articles.forEach(metadata => {
        const cardContent = metadataToLogCard(metadata);
        const card = logCard(cardContent);
        
        grid.appendChild(card);
    });
    
    // Add empty cards if we have fewer than 6 articles
    const emptyCards = createEmptyCardsToFill(articles.length, 6);
    emptyCards.forEach(emptyCard => {
        grid.appendChild(emptyCard);
    });
    
    return grid;
}