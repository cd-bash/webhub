import {
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
    const wrapper = document.getElementById('wrapper');
    const projectTitle = writeTitle("h1", content.name);
    const projectShowcase = createVideoShowcase(content.heroVideo);
    const projectSubtitle = writeTitle("h2", content.tagline)

    wrapper?.appendChild(projectTitle);
    wrapper?.appendChild(projectShowcase);
    wrapper?.appendChild(projectSubtitle);

    content.paragraphs.forEach(paragraph => {
        const text = writeParagraph(paragraph);
        wrapper?.appendChild(text);
    })

    const projectGallery = createContentGallery(content.imageGallery);
    wrapper?.appendChild(projectGallery);

    return wrapper;
}