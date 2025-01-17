import './utils.css'

export function createContentPage() {
    const page = document.createElement('div');
    const wrapper = document.createElement('div');
    page.id = 'content-page';
    wrapper.id = 'wrapper';

    page.appendChild(wrapper);
    return [page, wrapper];
}


// region TextBuilders
export function writeTitle(importance: string,text: string) {
    const title = document.createElement(importance);
    title.textContent = text;

    return title;
}

export function writeParagraph(text: string) {
    const paragraph = document.createElement("p");
    paragraph.textContent = text;

    return paragraph;
}
// endregion


// region VisualBuilders
export function createVideoShowcase(assetLinks: string[]) {
    const video = document.createElement("video");
    video.className = "video-showcase";
    video.autoplay = true;

    assetLinks.forEach(link => {
        const source = document.createElement("source");
        source.src = link;
        video.appendChild(source);
    });

    return video;
}

export function createContentGallery(assetLinks: string[]) {
    const gallery = document.createElement("div");
    gallery.className = "gallery";

    assetLinks.forEach(link => {
        const screenshot = document.createElement("img");
        screenshot.src = link;
        gallery.appendChild(screenshot);
    });

    return gallery;
}
// endregion
