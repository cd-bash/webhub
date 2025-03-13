import {createProjectContent} from "../../template.ts";

import SHOWCASE_WEBM from "./assets/showers-showcase.webm";
import SHOWCASE_MP4 from "./assets/showers-showcase.mp4";

import SCREENSHOT_1 from "./assets/showers-screenshot-1.png"
import SCREENSHOT_2 from "./assets/showers-screenshot-2.png"
import SCREENSHOT_3 from "./assets/showers-screenshot-3.png"
import SCREENSHOT_4 from "./assets/showers-screenshot-4.png"

import THUMBNAIL from "./assets/showers-thumbnail.png";

//-----------------------------------------------------------------------

export const { content, techs, buttons, thumbnail } = createProjectContent(
    "Showers", // Title
    "Game prototype", // Subtitle
    "Find the optimal temperature", // Tagline

    // Paragraphs
    [
        "Relive the frustrating process of learning how to operate a new shower. It’s too hot, it’s too cold. Turn right, then left. Push, pull…"
    ],

    // Medias
    [ SHOWCASE_WEBM, SHOWCASE_MP4 ],
    [ SCREENSHOT_1, SCREENSHOT_2, SCREENSHOT_3, SCREENSHOT_4 ],

    // Techs Used
    [
        { technology: "Unity 3D", percentage: 80 },
        { technology: "Blender", percentage: 60 },
        { technology: "Substance", percentage: 60 }
    ],

    //Buttons
    [
        ["GitHub Repo", "LINK", true],
    ],

    // Thumbnail
    THUMBNAIL,
    "Understanding shower interfaces.",
    "Game prototype",
    "#95948A",
    "showers"
);