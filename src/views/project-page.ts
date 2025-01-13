import {
    createContentPage,
    writeTitle,
    createVideoShowcase,
    writeParagraph,
    createContentGallery
} from "../views/utils.ts"

import SHOWCASE_MP4 from '../assets/projects/spaceCompass-showcase.mp4'
import SHOWCASE_WEBM from '../assets/projects/spaceCompass-showcase.webm'
import SCREENSHOT_1 from '../assets/projects/spaceCompass-screenshot-1.jpg'
import SCREENSHOT_2 from '../assets/projects/spaceCompass-screenshot-2.jpg'
import SCREENSHOT_3 from '../assets/projects/spaceCompass-screenshot-3.jpg'
import SCREENSHOT_4 from '../assets/projects/spaceCompass-screenshot-4.jpg'

let name = "Space Compass";
let tagline = "A 360 Odyssey";

let videos = [
  SHOWCASE_WEBM,
  SHOWCASE_MP4
];

let paragraphs = [
    "The core goal in the making of Space Compass was to end up with a playable game in short delays. A bit like a personal game jam! The game is a space shooter, where players’ movement is limited around a circle’s circumference. Player needs to dodge or destroy several asteroids, as well as some structures in the way.",
    "I’ve put a lot of effort in the UI elements like the main menu and the in-game interfaces. I wanted those interfaces to be dynamic and attractive while being in a minimal environment."
];

let screenshots = [
    SCREENSHOT_1,
    SCREENSHOT_2,
    SCREENSHOT_3,
    SCREENSHOT_4
];


export function renderProjectPage() {
    const projectPage = createContentPage()
    const projectTitle = writeTitle("h1", name);
    const projectShowcase = createVideoShowcase(videos);
    const projectSubtitle = writeTitle("h2", tagline)

    projectPage[1].appendChild(projectTitle);
    projectPage[1].appendChild(projectShowcase);
    projectPage[1].appendChild(projectSubtitle);

    paragraphs.forEach(paragraph => {
        const text = writeParagraph(paragraph);
        projectPage[1].appendChild(text);
    })

    const projectGallery = createContentGallery(screenshots);
    projectPage[1].appendChild(projectGallery);

    return projectPage[0];
}