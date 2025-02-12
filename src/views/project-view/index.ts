import {
    writeTitle,
    createVideoShowcase,
    writeParagraph,
    createContentGallery
} from "../utils"


export type ProjectContent = {
    readonly title: string;
    readonly subtitle: string;
    readonly heroVideo: ReadonlyArray<string>;
    readonly tagline: string;
    readonly paragraphs: ReadonlyArray<string>;
    readonly imageGallery: ReadonlyArray<string>;
}

//-----------------------------------------------------------------------

export function projectView(content: ProjectContent) {
    const viewWrapper = document.getElementById('view-wrapper')!;
    const article = document.createElement('article');

    const projectTitle = writeTitle("h1", content.title);
    const projectSubtitle = writeTitle("h5", content.subtitle);
    const projectShowcase = createVideoShowcase(content.heroVideo);

    const projectTagline = writeTitle("h2", content.tagline)

    viewWrapper.appendChild(article);
    article.appendChild(projectTitle);
    article.appendChild(projectSubtitle);
    article.appendChild(projectShowcase);

    article.appendChild(projectTagline);
    content.paragraphs.forEach(paragraph => {
        const text = writeParagraph(paragraph);
        article.appendChild(text);
    })

    article.appendChild(writeTitle("h2", "Gallery"));
    const projectGallery = createContentGallery(content.imageGallery);
    article.appendChild(projectGallery);

    return article;
}