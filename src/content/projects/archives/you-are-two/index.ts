import {createProjectContent} from "../../template.ts";

import SHOWCASE_WEBM from "./assets/you-are-two-showcase.webm";
import SHOWCASE_MP4 from "./assets/you-are-two-showcase.mp4";

import SCREENSHOT_1 from "./assets/you-are-two-screenshot-1.jpg"
import SCREENSHOT_2 from "./assets/you-are-two-screenshot-2.jpg"
import SCREENSHOT_3 from "./assets/you-are-two-screenshot-3.jpg"
import SCREENSHOT_4 from "./assets/you-are-two-screenshot-4.jpg"
import SCREENSHOT_5 from "./assets/you-are-two-screenshot-5.jpg"
import SCREENSHOT_6 from "./assets/you-are-two-screenshot-6.jpg"

import THUMBNAIL from "./assets/you-are-two-thumbnail.png";

//-----------------------------------------------------------------------

export const {content, techs, buttons, thumbnail} = createProjectContent(
    "You are two", // Title
    "Game prototype", // Subtitle
    "Sanity check", // Tagline

    // Paragraphs
    [
        "Concordia's entry for the Ubisoft Game Lab Competition is a cooperative game about mental health with online multiplayer."
    ],

    // Medias
    [SHOWCASE_WEBM, SHOWCASE_MP4],
    [SCREENSHOT_1, SCREENSHOT_2, SCREENSHOT_3, SCREENSHOT_4, SCREENSHOT_5, SCREENSHOT_6],

    // Techs Used
    [
        {technology: "Unity 3D", percentage: 90},
        {technology: "Blender", percentage: 60},
        {technology: "Substance", percentage: 30}
    ],

    //Buttons
    [
    ],

    // Thumbnail
    THUMBNAIL,
    "Ubisoft Game Lab Competition entry.",
    "Game prototype",
    "#1D1007",
    "you-are-two"
);