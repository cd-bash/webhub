import {
    createContentPage,
    writeTitle,
    createVideoShowcase,
    writeParagraph,
    createContentGallery
} from "../utils"


export type ProjectContent = {
    readonly name: string;
    readonly tagline: string;
    readonly path: string;

    readonly paragraphs: ReadonlyArray<string>;
    readonly heroVideo: ReadonlyArray<string>;
    readonly imageGallery: ReadonlyArray<string>;
}


export function renderProjectPage(content: ProjectContent) {
    const projectPage = createContentPage()
    const projectTitle = writeTitle("h1", content.name);
    const projectShowcase = createVideoShowcase(content.heroVideo);
    const projectSubtitle = writeTitle("h2", content.tagline)

    projectPage[1].appendChild(projectTitle);
    projectPage[1].appendChild(projectShowcase);
    projectPage[1].appendChild(projectSubtitle);

    content.paragraphs.forEach(paragraph => {
        const text = writeParagraph(paragraph);
        projectPage[1].appendChild(text);
    })

    const projectGallery = createContentGallery(content.imageGallery);
    projectPage[1].appendChild(projectGallery);

    return projectPage[0];
}