import { createPixelGridBackground, createWrapper, writeParagraph, writeTitle } from "../utils";
import { LogArticleMetadata } from "../../content/logs";
import { getLogArticleById } from "../../content/logs/registry";
import { ContentBlock, renderContentBlock } from "./log-block";
import { CallToActionOptions, createPixelBannerCTA } from "../../components/call-to-action";

export type LogArticleContentStructure = {
    readonly metadata: LogArticleMetadata;
    readonly header: LogArticleHeader;
    readonly articleBlocks: ContentBlock[];
    readonly callToAction?: CallToActionOptions;
}

export type LogArticleHeader = {
    title: string;
    subtitle: string;
    date: string;
    heroVisual?: string;
}

// ------------------------------------------------------------------------

export function logArticleView(articleId: string) {
    const page = document.createElement('div');
    const article = document.createElement('article');
    article.className = 'log';
    page.id = 'log-article';

    const articleContent = getLogArticleById(articleId);
    
    if (!articleContent) {
        page.appendChild(articleNotFound());
        return page;
    }

    const heroVisual = document.createElement('img');
    heroVisual.className = 'hero-visual';
    if (articleContent.header.heroVisual) {
        heroVisual.src = articleContent.header.heroVisual;
    }

    let cta: HTMLElement | undefined;
    if (articleContent.callToAction) {
        cta = createPixelBannerCTA(articleContent.callToAction);
    }

    article.appendChild(articleBody(articleContent.articleBlocks));
    page.appendChild(header(articleContent.header));
    page.appendChild(heroVisual);
    page.appendChild(article);

    if (cta) {
        page.appendChild(cta);
    }
    
    return page;
}

// ------------------------------------------------------------------------

function header(content: LogArticleHeader) {
    const header = document.createElement('header');
    header.className = 'log-header';

    const wrapper = createWrapper();
    const titleContainer = document.createElement('div');
    titleContainer.className = 'title-container';

    const title = writeTitle('h1', content.title);
    const subtitle = writeTitle('h2', content.subtitle);
    const date = writeParagraph(content.date);
    date.className = 'date';

    

    const pixelGrid = createPixelGridBackground('top', {
        columns: 10,
        colors: ['#0f0f0f', '#2a2a2a', '#181818']
    });

    titleContainer.appendChild(title);
    titleContainer.appendChild(subtitle);
    titleContainer.appendChild(date);
    wrapper.appendChild(titleContainer);

    header.appendChild(pixelGrid);
    header.appendChild(wrapper);

    return header;
}

function articleBody(blocks: ContentBlock[]) {
    const article = document.createElement('article');
    article.className = 'log-article-body';

    const wrapper = createWrapper();

    blocks.forEach(block => {
        const element = renderContentBlock(block);
        if (element) {
            wrapper.appendChild(element);
        }
    });

    article.appendChild(wrapper);
    return article;
}

function articleNotFound() {
    const errorMessage = document.createElement('div');
    errorMessage.id = 'article-not-found';

    const wrapper = createWrapper();

    const title = writeTitle('h1', 'Article Not Found');
    const message = writeParagraph('The requested article could not be found.');

    wrapper.appendChild(title);
    wrapper.appendChild(message);
    errorMessage.appendChild(wrapper);

    return errorMessage;
}