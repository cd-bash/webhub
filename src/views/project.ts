import {
    writeTitle,
    createVideoShowcase,
    writeParagraph,
    createContentGallery, createThreeBackground
} from "./utils"


export type ProjectContent = {
    readonly title: string;
    readonly subtitle: string;
    readonly heroVideo: ReadonlyArray<string>;
    readonly tagline: string;
    readonly paragraphs: ReadonlyArray<string>;
    readonly imageGallery: ReadonlyArray<string>;
    readonly credits: ReadonlyArray<ProjectCredits>;
}

export type ProjectCredits = [
    name: string,
    link: string,
]


//-----------------------------------------------------------------------

export function projectView(content: ProjectContent) {
    const article = document.createElement('article');
    createThreeBackground();

    article.appendChild(header(content.title, content.subtitle));
    article.appendChild(videoShowcase(content.heroVideo));
    article.appendChild(description(content.tagline, content.paragraphs));
    article.appendChild(gallery(content.imageGallery));

    if (content.credits && content.credits.length > 0) {
        article.appendChild(credits(content.credits));
    }

    return article;
}

//-----------------------------------------------------------------------

function header(title: string, subtitle: string) {
    const header = document.createElement('header');

    header.appendChild(writeTitle("h1", title));
    header.appendChild(writeTitle("h5", subtitle));

    return header;
}


function videoShowcase(videoRefs: ReadonlyArray<string>) {
    const videoShowcase = document.createElement('section');
    videoShowcase.appendChild(createVideoShowcase(videoRefs));

    return videoShowcase;
}


function description(tagline: string, paragraphs: ReadonlyArray<string>) {
    const description = document.createElement('section');
    description.className = "description";

    description.appendChild(writeTitle("h2", tagline));
    paragraphs.forEach(paragraph => {
        const text = writeParagraph(paragraph);
        description.appendChild(text);
    });

    return description;
}


function gallery(imageRefs: ReadonlyArray<string>) {
    const gallery = document.createElement('section');
    gallery.className = "gallery";

    gallery.appendChild(writeTitle("h2", "Media Gallery"));
    const projectGallery = createContentGallery(imageRefs);
    gallery.appendChild(projectGallery);

    return gallery;
}


function credits(creditsRef: ReadonlyArray<ProjectCredits>) {
    const credits = document.createElement('section');
    credits.className = "credits";

    credits.appendChild(writeTitle("h2", "With the help of"));

    creditsRef.forEach(credit => {
        const creditLink = document.createElement('a');
        creditLink.href = credit[1];
        creditLink.textContent = credit[0];
        creditLink.target = "_blank";
        credits.appendChild(creditLink);
    });

    return credits;
}

