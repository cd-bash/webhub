import {renderProjectPage} from "../../../views/project-view";
import {ProjectContent} from "../../../views/project-view/project-view";

import WEBM_VIDEO from "./assets/tank-showcase.webm";
import MP4_VIDEO from "./assets/tank-showcase.mp4";

import SCREENSHOT_1 from "./assets/tank-screenshot-1.jpg"
import SCREENSHOT_2 from "./assets/tank-screenshot-2.jpg"
import SCREENSHOT_3 from "./assets/tank-screenshot-3.jpg"
import SCREENSHOT_4 from "./assets/tank-screenshot-4.jpg"

const content: ProjectContent = {
    name: "TANK",
    tagline: "A collection of three unique iterations",
    path: "www.charlesdouce.com/interactives/",

    paragraphs: [
        "TANK assemble three different games, each based on the original TANKS! game made by Unity Technologies. It’s an exploration of mechanics and the discovery of new environment. The game is experimental and has the goal to dig the player’s curiosity. Prepare yourself as you step into unknown territory, revealing the ruins of a lost civilization.",
        "The game includes three chapters: Projection, Dialogue and Farewell. Each of them offers a unique gameplay while evolving around a common theme."
    ],

    heroVideo: [
        WEBM_VIDEO,
        MP4_VIDEO
    ],

    imageGallery: [
        SCREENSHOT_1,
        SCREENSHOT_2,
        SCREENSHOT_3,
        SCREENSHOT_4
    ]
}

export function ProjectPage() {
    return renderProjectPage(content);
}