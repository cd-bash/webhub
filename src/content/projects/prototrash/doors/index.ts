import {createProjectContent} from "../../template.ts";

import SHOWCASE_WEBM from "./assets/doors-showcase.webm";
import SHOWCASE_MP4 from "./assets/doors-showcase.mp4";

import SCREENSHOT_1 from "./assets/doors-screenshot-1.png"
import SCREENSHOT_2 from "./assets/doors-screenshot-2.png"
import SCREENSHOT_3 from "./assets/doors-screenshot-3.png"
import SCREENSHOT_4 from "./assets/doors-screenshot-4.png"

import THUMBNAIL from "./assets/doors-thumbnail.png";

//-----------------------------------------------------------------------

export const {content, techs, buttons, thumbnail} = createProjectContent(
    "Doors", // Title
    "Game prototype", // Subtitle
    "We've all been there", // Tagline

    // Paragraphs
    [
        "An experiment over Norman's design principles, as participants faced a series of doors, unsure whether to push or pull to open them."
    ],

    // Medias
    [SHOWCASE_WEBM, SHOWCASE_MP4],
    [SCREENSHOT_1, SCREENSHOT_2, SCREENSHOT_3, SCREENSHOT_4],

    // Techs Used
    [
        {technology: "Unity 3D", percentage: 70},
        {technology: "Blender", percentage: 30},
        {technology: "Figma", percentage: 60}
    ],

    //Buttons
    [
        ["GitHub Repo", "LINK", true]
    ],

    // Thumbnail
    THUMBNAIL,
    "Testing some design theories.",
    "Game prototype",
    "#222428",
    "doors"
);