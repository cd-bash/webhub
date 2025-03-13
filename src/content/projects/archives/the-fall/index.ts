import {createProjectContent} from "../../template.ts";

import SHOWCASE_WEBM from "./assets/the-fall-showcase.webm";
import SHOWCASE_MP4 from "./assets/the-fall-showcase.mp4";

import SCREENSHOT_1 from "./assets/the-fall-screenshot-1.jpg"
import SCREENSHOT_2 from "./assets/the-fall-screenshot-2.jpg"
import SCREENSHOT_3 from "./assets/the-fall-screenshot-3.jpg"
import SCREENSHOT_4 from "./assets/the-fall-screenshot-4.jpg"

import THUMBNAIL from "./assets/the-fall-thumbnail.png";

//-----------------------------------------------------------------------

export const {content, techs, buttons, thumbnail} = createProjectContent(
    "The Fall", // Title
    "Game prototype", // Subtitle
    "A glitchy situation", // Tagline

    // Paragraphs
    [
        "Little game all made in Processing where players fall into glitch and try to escape a malicious system error."
    ],

    // Medias
    [SHOWCASE_WEBM, SHOWCASE_MP4],
    [SCREENSHOT_1, SCREENSHOT_2, SCREENSHOT_3, SCREENSHOT_4],

    // Techs Used
    [
        {technology: "Photoshop", percentage: 10},
        {technology: "Processing", percentage: 85},
        {technology: "Illustrator", percentage: 15}
    ],

    //Buttons
    [
        ["See the Demo", "https://www.youtube.com/watch?v=0GVSPCsy9E8&ab_channel=cd-bash", true],
        ["See the repo", "https://github.com/cd-bash/The-Fall", false]
    ],

    // Thumbnail
    THUMBNAIL,
    "Getting stuck in a computer bug.",
    "Game prototype",
    "#130A23",
    "the-fall"
);