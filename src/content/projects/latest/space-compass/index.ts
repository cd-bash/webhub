import {createProjectContent} from "../../template.ts";

import SHOWCASE_WEBM from "./assets/space-compass-showcase.webm";
import SHOWCASE_MP4 from "./assets/space-compass-showcase.mp4";

import SCREENSHOT_1 from "./assets/space-compass-screenshot-1.jpg";
import SCREENSHOT_2 from "./assets/space-compass-screenshot-2.jpg";
import SCREENSHOT_3 from "./assets/space-compass-screenshot-3.jpg";
import SCREENSHOT_4 from "./assets/space-compass-screenshot-4.jpg";

import THUMBNAIL from "./assets/space-compass-thumbnail.png";

//-----------------------------------------------------------------------

export const { content, techs, buttons, thumbnail } = createProjectContent(
    "Space Compass", // Title
    "Game prototype", // Subtitle
    "Radial Navigation", // Tagline

    // Paragraphs
    [
        "This space-themed shooter features circular movement constraints, requiring players to evade or eliminate various asteroids and structures."
    ],

    // Medias
    [ SHOWCASE_WEBM, SHOWCASE_MP4 ],
    [ SCREENSHOT_1, SCREENSHOT_2, SCREENSHOT_3, SCREENSHOT_4 ],

    // Techs Used
    [
        { technology: "Unity 3D", percentage: 90 },
        { technology: "Blender", percentage: 80 },
        { technology: "Adobe XD", percentage: 25 }
    ],

    //Buttons
    [
        ["Play now", "https://play.unity.com/mg/other/space-compass", true],
        ["Access the Repo", "https://github.com/cd-bash", false]
    ],

    // Thumbnail
    THUMBNAIL,
    "A spinning space shooter prototype",
    "Game Prototype",
    "#000000",
    "space-compass",
);