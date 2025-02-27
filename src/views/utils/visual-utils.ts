/*
 VISUAL-UTILITIES
 Are functions used to create visual elements like pictures and videos.
 They are mainly used in content templates.
 */


export function createVideoShowcase(assetLinks: ReadonlyArray<string>) {
    const videoContainer = document.createElement("div");
    const video = document.createElement("video");

    videoContainer.className = "video-showcase";
    videoContainer.appendChild(video);

    video.autoplay = true;
    video.muted = true;
    video.loop = true;

    assetLinks.forEach(link => {
        const source = document.createElement("source");
        source.src = link;
        video.appendChild(source);
    });

    return videoContainer;
}

export function createContentGallery(assetLinks: ReadonlyArray<string>) {
    const gallery = document.createElement("div");
    gallery.className = "gallery-content";

    assetLinks.forEach(link => {
        const screenshot = document.createElement("img");
        screenshot.src = link;
        gallery.appendChild(screenshot);
    });

    return gallery;
}


