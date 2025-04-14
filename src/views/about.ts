import {writeTitle} from "./utils";

export type AboutContent = {
    readonly title: string;
    readonly subtitle: string;
    readonly paragraphs: ReadonlyArray<string>;
}

export type AboutGrid = {
    readonly title: string;
}

// --------------------------------------------------------------------------------

export function aboutView() {
    const article = document.createElement('article');
    const pageTitle = writeTitle("h1", "About CD");


    article.appendChild(pageTitle);

    return article;
}

// --------------------------------------------------------------------------------

function gridSection() {
    const gridSection = document.createElement('section');
    const gridTitle = writeTitle("h2", "At a glance");
    const gridContent = document.createElement('div');
    gridContent.classList.add('grid-content');

    gridSection.appendChild(gridTitle);
    gridSection.appendChild(gridContent);

    return gridSection;
}

function gridItem(title: string, content: string) {

}
