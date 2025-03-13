import {createProjectContent} from "../../template.ts";

import SHOWCASE_WEBM from "./assets/fit-in-showcase.webm";
import SHOWCASE_MP4 from "./assets/fit-in-showcase.mp4";

import SCREENSHOT_1 from "./assets/fit-in-screenshot-1.png"
import SCREENSHOT_2 from "./assets/fit-in-screenshot-2.png"
import SCREENSHOT_3 from "./assets/fit-in-screenshot-3.png"
import SCREENSHOT_4 from "./assets/fit-in-screenshot-4.png"

import THUMBNAIL from "./assets/fit-in-thumbnail.png";

//-----------------------------------------------------------------------

export const {content, techs, buttons, thumbnail} = createProjectContent(
    "Fit In", // Title
    "Game prototype", // Subtitle
    "One cube and a squared hole", // Tagline

    // Paragraphs
    [
        "A simple experiment in which players control a moving cube and try to fall into a perfectly shaped hole in the ground."
    ],

    // Medias
    [SHOWCASE_WEBM, SHOWCASE_MP4],
    [SCREENSHOT_1, SCREENSHOT_2, SCREENSHOT_3, SCREENSHOT_4],

    // Techs Used
    [
        {technology: "Unity 3D", percentage: 80},
        {technology: "Blender", percentage: 10},
        {technology: "Figma", percentage: 20}
    ],

    //Buttons
    [
        ["GitHub Repo", "LINK", true]
    ],

    // Thumbnail
    THUMBNAIL,
    "Frustrating moving cube.",
    "Game prototype",
    "#252525",
    "fit-in"
);