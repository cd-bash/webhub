import {BackgroundChoice, threeBackground} from "../../components/three-background";

export function createThreeBackground(choice: BackgroundChoice) {
    const viewBox = document.getElementById('view-box')!;
    const background = document.createElement('div');

    if (!document.querySelector('.three-background')) {
        background.className = 'three-background';
        background.appendChild(threeBackground(choice));

        viewBox.appendChild(background);
    }
}

export function createVideoBackground(videoWebm: string, videoMp4: string) {
    const background = document.createElement('video');
    background.className = 'video-background';
    background.autoplay = true;
    background.loop = true;
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