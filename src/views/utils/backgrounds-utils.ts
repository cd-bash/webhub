import { createPixelGrid, GRID_CONFIG } from "../../components/pixel-grid";

export function createVideoBackground(videoWebm: string, videoMp4: string, oneShot: boolean = false) {
    const background = document.createElement('video');
    background.className = 'video-background';
    background.autoplay = oneShot ? false : true;
    background.loop = oneShot ? false : true;
    background.muted = true;

    const sourceWebm = document.createElement('source');
    sourceWebm.src = videoWebm;
    sourceWebm.type = 'video/webm';

    const sourceMp4 = document.createElement('source');
    sourceMp4.src = videoMp4;
    sourceMp4.type = 'video/mp4';

    background.appendChild(sourceWebm);
    background.appendChild(sourceMp4);

    return background;
}

export function createPixelGridBackground(contentAlignment: 'left' | 'right' | 'full', configs: GRID_CONFIG) {
    // For 'full' alignment, pass it directly. For 'left'/'right', invert the alignment
    const alignment = contentAlignment === 'full' 
        ? 'full' 
        : (contentAlignment === 'right' ? 'left' : 'right');
    return createPixelGrid(configs, alignment);
}