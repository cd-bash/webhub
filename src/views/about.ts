import {writeLink, writeParagraph, writeTitle} from "./utils";
import {aboutContent} from "../content/about";
import {endOfLine} from "../components/end-of-line";

export type AboutContentStructure = {
    readonly title: string;
    readonly subtitle: string;
    readonly introTagline: string;
    readonly introText: string;
    readonly gridCategory: ReadonlyArray<GridCategoryContent>;
    readonly achievements: ReadonlyArray<AchievementContent>;
    readonly profileLinks: ReadonlyArray<ProfileLinkContent>;
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

export type AchievementContent = {
    readonly title: string;
    readonly description: string;
}

export type ProfileLinkContent = {
    readonly text: string;
    readonly link: string;
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

    aboutContent.gridCategory.forEach(category => {
        const gridCategoryElement = gridCategory(category);
        article.appendChild(gridCategoryElement);
    });

    article.appendChild(achievements(aboutContent.achievements));
    article.appendChild(profileLinks(aboutContent.profileLinks));
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

function achievements(achievement:  ReadonlyArray<AchievementContent>) {
    const achievements = document.createElement('div');
    const achievementsTitle = writeTitle("h2", "Achievements");

    achievements.className = 'achievements';
    achievements.appendChild(achievementsTitle);

    achievement.forEach(item => {
        const achievementItem = document.createElement('div');
        const achievementTitle = writeParagraph(item.title);
        const achievementDescription = writeParagraph(item.description);

        achievementItem.className = 'item';
        achievementTitle.className = 'title';
        achievementItem.appendChild(achievementTitle);
        achievementItem.appendChild(achievementDescription);
        achievements.appendChild(achievementItem);
    });

    return achievements;
}

function profileLinks(links: ReadonlyArray<ProfileLinkContent>) {
    const profileLinks = document.createElement('div');
    profileLinks.appendChild(writeTitle("h2", "Profile Links"));

    profileLinks.className = 'profile-links';

    links.forEach(link => {
        profileLinks.appendChild(writeLink(link.text, link.link));
    })

    return profileLinks;
}
