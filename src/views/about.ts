import {writeParagraph, writeTitle} from "./utils";
import {aboutContent} from "../content/about";
import {endOfLine} from "../components/end-of-line";

export type AboutContentStructure = {
    readonly title: string;
    readonly subtitle: string;
    readonly introTagline: string;
    readonly introText: string;
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
    const pageIntro = intro();
    const foo = endOfLine();

    article.id = 'about-page';

    article.appendChild(pageTitle);
    article.appendChild(pageSubtitle);
    article.appendChild(pageIntro);

    aboutContent.sections.forEach(section => {
        const gridSectionElement = gridSection(section);
        article.appendChild(gridSectionElement);
    })

    article.appendChild(foo);
    return article;
}

// --------------------------------------------------------------------------------

function intro() {
    const intro = document.createElement('intro');
    const introTagline = writeParagraph(aboutContent.introTagline);
    const introText = writeParagraph(aboutContent.introText);

    intro.className = 'intro';
    introTagline.className = 'title';
    introText.className = 'text';

    intro.appendChild(introTagline);
    intro.appendChild(introText);

    return intro;
}

function gridSection(section: GridSectionContent) {
    const gridSection = document.createElement('div');

    gridSection.className = 'grid-section';

    section.categories.forEach(category => {
        const gridCategoryElement = gridCategory(category);
        gridSection.appendChild(gridCategoryElement);
    })

    return gridSection;
}

function gridCategory(category: GridCategoryContent) {
    const gridCategory = document.createElement('div');
    const categoryTitle = writeTitle("h2", category.title);

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

    gridItem.className = 'grid-item';
    itemTitle.className = 'title';
    itemSubtitle.className = 'subtitle';
    itemText.className = 'text';

    gridItem.appendChild(itemTitle);
    gridItem.appendChild(itemSubtitle);
    gridItem.appendChild(itemText);

    return gridItem;
}


