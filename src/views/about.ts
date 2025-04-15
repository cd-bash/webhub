import {writeParagraph, writeTitle} from "./utils";
import {aboutContent} from "../content/about";

export type AboutContentStructure = {
    readonly title: string;
    readonly subtitle: string;
    readonly paragraphs: ReadonlyArray<string>;
    readonly sections: ReadonlyArray<GridSectionContent>;
}

export type GridSectionContent = {
    readonly title: string;
    readonly categories: ReadonlyArray<GridCategoryContent>;
}

export type GridCategoryContent = {
    readonly title: string;
    readonly items: ReadonlyArray<GridItemContent>;
}

export type GridItemContent = {
    readonly title: string;
    readonly subtitle: string;
    readonly text: string;
}

// --------------------------------------------------------------------------------

export function aboutView() {
    const article = document.createElement('article');
    const pageTitle = writeTitle("h1", aboutContent.title);
    const pageSubtitle = writeTitle("h5", aboutContent.subtitle);

    article.appendChild(pageTitle);
    article.appendChild(pageSubtitle);

    aboutContent.sections.forEach(section => {
        const gridSectionElement = gridSection(section);
        article.appendChild(gridSectionElement);
    })

    return article;
}

// --------------------------------------------------------------------------------

function gridSection(section: GridSectionContent) {
    const gridSection = document.createElement('div');
    const sectionTitle = writeTitle("h2", section.title);

    gridSection.appendChild(sectionTitle);

    section.categories.forEach(category => {
        const gridCategoryElement = gridCategory(category);
        gridSection.appendChild(gridCategoryElement);
    })

    return gridSection;
}

function gridCategory(category: GridCategoryContent) {
    const gridCategory = document.createElement('div');
    const categoryTitle = writeTitle("h6", category.title);

    gridCategory.classList.add('grid-category');

    gridCategory.appendChild(categoryTitle);

    category.items.forEach(item => {
        const gridItemElement = gridItem(item);
        gridCategory.appendChild(gridItemElement);
    });

    return gridCategory;
}


function gridItem(item: GridItemContent) {
    const gridItem = document.createElement('div');
    const itemTitle = writeParagraph(item.title);
    const itemSubtitle = writeParagraph(item.subtitle);
    const itemText = writeParagraph(item.text);

    gridItem.classList.add('grid-item');

    gridItem.appendChild(itemTitle);
    gridItem.appendChild(itemSubtitle);
    gridItem.appendChild(itemText);

    return gridItem;
}


