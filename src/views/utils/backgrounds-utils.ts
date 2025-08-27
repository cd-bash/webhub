import {BackgroundChoice, threeBackground} from "../../components/three-background";
import HOME_VIDEO_WEBM from './assets/cd-labs-home-page-hook-animation.webm';
import HOME_VIDEO_MP4 from './assets/cd-labs-home-page-hook-animation.mp4';

export function createThreeBackground(choice: BackgroundChoice) {
    const viewBox = document.getElementById('view-box')!;
    const background = document.createElement('div');

    if (!document.querySelector('.three-background')) {
        background.className = 'three-background';
        background.appendChild(threeBackground(choice));

        viewBox.appendChild(background);
    }
}

export function createVideoBackground() {
    const background = document.createElement('video');
    background.className = 'video-background';
    background.autoplay = true;
    background.loop = true;
    background.muted = true;

    const sourceWebm = document.createElement('source');
    sourceWebm.src = HOME_VIDEO_WEBM;
    sourceWebm.type = 'video/webm';

    const sourceMp4 = document.createElement('source');
    sourceMp4.src = HOME_VIDEO_MP4;
    sourceMp4.type = 'video/mp4';

    background.appendChild(sourceWebm);
    background.appendChild(sourceMp4);

    return background;
}