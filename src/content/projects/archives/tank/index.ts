import {createProjectContent} from "../../template.ts";

import SHOWCASE_WEBM from "./assets/tank-showcase.webm";
import SHOWCASE_MP4 from "./assets/tank-showcase.mp4";

import SCREENSHOT_1 from "./assets/tank-screenshot-1.jpg"
import SCREENSHOT_2 from "./assets/tank-screenshot-2.jpg"
import SCREENSHOT_3 from "./assets/tank-screenshot-3.jpg"
import SCREENSHOT_4 from "./assets/tank-screenshot-4.jpg"
import SCREENSHOT_5 from "./assets/tank-screenshot-5.jpg"
import SCREENSHOT_6 from "./assets/tank-screenshot-6.jpg"

import THUMBNAIL from "./assets/tank-thumbnail.png";

//-----------------------------------------------------------------------

export const {content, techs, buttons, thumbnail} = createProjectContent(
    "Tank", // Title
    "Game Release - Winter 2018", // Subtitle
    "A game collection", // Tagline

    // Paragraphs
    [
        "An exploration of mechanics and discovery of new environments. It’s an experimental journey designed to pique your interest, leading you to discover the remains of a forgotten civilization."
    ],

    // Medias
    [SHOWCASE_WEBM, SHOWCASE_MP4],
    [SCREENSHOT_1, SCREENSHOT_2, SCREENSHOT_3, SCREENSHOT_4, SCREENSHOT_5, SCREENSHOT_6],

    // Techs Used
    [
        {technology: "Unity 3D", percentage: 90},
        {technology: "Blender", percentage: 30},
        {technology: "Substance", percentage: 10}
    ],

    //Buttons
    [
        ["Download the game", "https://cd-bash.itch.io/tank", true],
        ["Process Journal", "https://github.com/cd-bash/TANK/wiki", false]
    ],

    // Thumbnail
    THUMBNAIL,
    "Lonely tank exploring mysterious environments.",
    "Game Release",
    "#000000",
    "tank"
);