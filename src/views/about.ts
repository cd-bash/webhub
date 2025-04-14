import {writeParagraph, writeTitle} from "./utils";

export type AboutContent = {
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


const testContent: AboutContent = {
    title: "About CD",
    subtitle: "A short introduction",
    paragraphs: [
        "This is a test paragraph. It is used to test the text utilities.",
        "This is another test paragraph. It is used to test the text utilities.",
        "This is a third test paragraph. It is used to test the text utilities."
    ],
    sections: [
        {
            title: "Test Section",
            categories: [
                {
                    title: "Test Category",
                    items: [
                        {
                            title: "Test Item",
                            subtitle: "Test Subtitle",
                            text: "This is a test item. It is used to test the text utilities."
                        }
                    ]
                }
            ]
        }
    ]
}

// --------------------------------------------------------------------------------

export function aboutView() {
    const article = document.createElement('article');
    const pageTitle = writeTitle("h1", "About CD");


    article.appendChild(pageTitle);

    testContent.sections.forEach(section => {
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
    const categoryTitle = writeTitle("h3", category.title);

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
    const itemTitle = writeTitle("h4", item.title);
    const itemSubtitle = writeTitle("h6", item.subtitle);
    const itemText = writeParagraph(item.text);

    gridItem.classList.add('grid-item');

    gridItem.appendChild(itemTitle);
    gridItem.appendChild(itemSubtitle);
    gridItem.appendChild(itemText);

    return gridItem;
}


