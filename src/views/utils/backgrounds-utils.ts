import {BackgroundChoice, threeBackground} from "../../components/three-background";
import HOME_VIDEO_WEBM from './assets/cd-anim.webm';
import HOME_VIDEO_MP4 from './assets/cd-anim.mp4';

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
    background.src = HOME_VIDEO_WEBM;
    background.src = HOME_VIDEO_MP4;
    background.autoplay = true;
    background.loop = true;
    background.muted = true;

    return background;
}