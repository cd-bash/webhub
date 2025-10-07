import { createPixelGridBackground, createWrapper, writeParagraph, writeTitle } from "../utils";
import { LogArticleMetadata } from "../../content/logs";
import { getLogArticleById } from "../../content/logs/registry";
import { ContentBlock, renderContentBlock } from "./log-block";

export type LogArticleContentStructure = {
    readonly metadata: LogArticleMetadata;
    readonly header: LogArticleHeader;
    readonly articleBlocks: ContentBlock[];
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
    page.id = 'log-article';

    // Get the article content by ID
    const articleContent = getLogArticleById(articleId);
    
    if (!articleContent) {
        // Handle article not found
        const errorMessage = document.createElement('div');
        errorMessage.innerHTML = '<h1>Article not found</h1><p>The requested article could not be found.</p>';
        page.appendChild(errorMessage);
        return page;
    }

    article.appendChild(articleBody(articleContent.articleBlocks));
    page.appendChild(header(articleContent.header));
    page.appendChild(article);
    
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

    const heroVisual = document.createElement('img');
    if (content.heroVisual) {
        heroVisual.src = content.heroVisual;
    }

    const pixelGrid = createPixelGridBackground('top', {
        columns: 10,
        colors: ['#0f0f0f', '#2a2a2a', '#181818']
    });

    titleContainer.appendChild(title);
    titleContainer.appendChild(subtitle);
    titleContainer.appendChild(date);
    wrapper.appendChild(titleContainer);

    header.appendChild(heroVisual);
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