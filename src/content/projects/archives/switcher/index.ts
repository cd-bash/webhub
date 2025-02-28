import {createProjectContent} from "../../template.ts";

import SHOWCASE_WEBM from "./assets/switcher-showcase.webm";
import SHOWCASE_MP4 from "./assets/switcher-showcase.mp4";

import SCREENSHOT_1 from "./assets/switcher-screenshot-1.jpg"
import SCREENSHOT_2 from "./assets/switcher-screenshot-2.jpg"
import SCREENSHOT_3 from "./assets/switcher-screenshot-3.jpg"
import SCREENSHOT_4 from "./assets/switcher-screenshot-4.jpg"

import THUMBNAIL from "./assets/switcher-thumbnail.png";

//-----------------------------------------------------------------------

export const {content, techs, buttons, thumbnail} = createProjectContent(
    "Switcher", // Title
    "Game prototype - Winter 2017", // Subtitle
    "A geometrical ballet", // Tagline

    // Paragraphs
    [
        "A primitive interactive medium where users fill in blank squares over different rhythmic scenes."
    ],

    // Medias
    [SHOWCASE_WEBM, SHOWCASE_MP4],
    [SCREENSHOT_1, SCREENSHOT_2, SCREENSHOT_3, SCREENSHOT_4],

    // Techs Used
    [
        {technology: "Photoshop", percentage: 10},
        {technology: "Processing", percentage: 90},
        {technology: "Illustrator", percentage: 10}
    ],

    //Buttons
    [
        ["See the demo", "https://www.youtube.com/watch?v=Z89hsC-cPM0&ab_channel=cd-bash", true],
        ["Access the repo", "https://github.com/cd-bash/switcher", false]
    ],

    // Thumbnail
    THUMBNAIL,
    "Interact with a geometrical ballet.",
    "Game prototype",
    "#000000",
    "switcher"
);