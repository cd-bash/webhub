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

//-----------------------------------------------------------------------

export function projectView(content: ProjectContent) {
    const viewWrapper = document.getElementById('view-wrapper')!;

    const projectTitle = writeTitle("h1", content.name);
    const projectShowcase = createVideoShowcase(content.heroVideo);
    const projectSubtitle = writeTitle("h2", content.tagline)

    viewWrapper.appendChild(projectTitle);
    viewWrapper.appendChild(projectShowcase);
    viewWrapper.appendChild(projectSubtitle);

    content.paragraphs.forEach(paragraph => {
        const text = writeParagraph(paragraph);
        viewWrapper.appendChild(text);
    })

    const projectGallery = createContentGallery(content.imageGallery);
    viewWrapper.appendChild(projectGallery);

    return viewWrapper;
}