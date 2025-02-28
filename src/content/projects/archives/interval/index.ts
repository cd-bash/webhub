import {createProjectContent} from "../../template.ts";

import SHOWCASE_WEBM from "./assets/interval-showcase.webm";
import SHOWCASE_MP4 from "./assets/interval-showcase.mp4";

import SCREENSHOT_1 from "./assets/interval-screenshot-1.jpg"
import SCREENSHOT_2 from "./assets/interval-screenshot-2.jpg"
import SCREENSHOT_3 from "./assets/interval-screenshot-3.jpg"
import SCREENSHOT_4 from "./assets/interval-screenshot-4.jpg"

import THUMBNAIL from "./assets/interval-thumbnail.png";

//-----------------------------------------------------------------------

export const {content, techs, buttons, thumbnail} = createProjectContent(
    "Interval", // Title
    "Game Prototype", // Subtitle
    "What if you can feel time?", // Tagline

    // Paragraphs
    [
        "In Interval, players can travel to another dimension, capturing the present moment. However, defying natural laws comes with consequences."
    ],

    // Medias
    [SHOWCASE_WEBM, SHOWCASE_MP4],
    [SCREENSHOT_1, SCREENSHOT_2, SCREENSHOT_3, SCREENSHOT_4],

    // Techs Used
    [
        {technology: "Unity 3D", percentage: 80},
        {technology: "Blender", percentage: 80},
        {technology: "Substance", percentage: 60}
    ],

    //Buttons
    [
        ["Process Journal", "https://github.com/cd-bash/Independent-Study/wiki", true],
        ["GitHub Repo", "https://github.com/cd-bash/Independent-Study", false]
    ],

    // Thumbnail
    THUMBNAIL,
    "Use a time device to stop motion.",
    "Game Prototype",
    "#010010",
    "interval"
);