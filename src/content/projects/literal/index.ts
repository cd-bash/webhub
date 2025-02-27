import {createProjectContent} from "../template.ts";

import SHOWCASE_WEBM from "./assets/literal-showcase.webm";
import SHOWCASE_MP4 from "./assets/literal-showcase.mp4";

import SCREENSHOT_1 from "./assets/literal-screenshot-1.jpg"
import SCREENSHOT_2 from "./assets/literal-screenshot-2.jpg"
import SCREENSHOT_3 from "./assets/literal-screenshot-3.jpg"
import SCREENSHOT_4 from "./assets/literal-screenshot-4.jpg"

import THUMBNAIL from "./assets/literal-thumbnail.png";

//-----------------------------------------------------------------------

export const {content, techs, buttons, thumbnail} = createProjectContent(
    "Literal", // Title
    "Game prototype - Fall 2017", // Subtitle
    "Physics engine for words", // Tagline

    // Paragraphs
    [
        "I incorporated typographic elements into a simulated environment, allowing them to respond to physics and player interactions."
    ],

    // Medias
    [SHOWCASE_WEBM, SHOWCASE_MP4],
    [SCREENSHOT_1, SCREENSHOT_2, SCREENSHOT_3, SCREENSHOT_4],

    // Techs Used
    [
        {technology: "Unity 3D", percentage: 80},
        {technology: "Photoshop", percentage: 10},
        {technology: "Illustrator", percentage: 60}
    ],

    //Buttons
    [
        ["Try it online", "LINK", true],
    ],

    // Thumbnail
    THUMBNAIL,
    "Typography in physics-based environments.",
    "Game prototype",
    "#F05924",
    "literal"
);