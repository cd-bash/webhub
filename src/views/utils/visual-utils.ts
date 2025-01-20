/*
 VISUAL-UTILITIES
 Are functions used to create visual elements like pictures and videos.
 They are mainly used in content templates.
 */

export function createVideoShowcase(assetLinks: ReadonlyArray<string>) {
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

export function createContentGallery(assetLinks: ReadonlyArray<string>) {
    const gallery = document.createElement("div");
    gallery.className = "gallery";

    assetLinks.forEach(link => {
        const screenshot = document.createElement("img");
        screenshot.src = link;
        gallery.appendChild(screenshot);
    });

    return gallery;
}