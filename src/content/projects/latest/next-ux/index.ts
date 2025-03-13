import {createProjectContent} from "../../template.ts";

import SHOWCASE_WEBM from "./assets/next-ux-showcase.webm";
import SHOWCASE_MP4 from "./assets/next-ux-showcase.mp4";

import SCREENSHOT_1 from "./assets/next-ux-screenshot-1.jpg"
import SCREENSHOT_2 from "./assets/next-ux-screenshot-2.jpg"
import SCREENSHOT_3 from "./assets/next-ux-screenshot-3.jpg"
import SCREENSHOT_4 from "./assets/next-ux-screenshot-4.jpg"

import THUMBNAIL from "./assets/next-ux-thumbnail.png";

//-----------------------------------------------------------------------

export const {content, techs, buttons, thumbnail} = createProjectContent(
    "Next Ux", // Title
    "Web app UX & UI", // Subtitle
    "Clear Workflows", // Tagline

    // Paragraphs
    [
        "Complete overhaul of Voxco's product line, including a redesigned user flow and interface."
    ],

    // Medias
    [SHOWCASE_WEBM, SHOWCASE_MP4],
    [SCREENSHOT_1, SCREENSHOT_2, SCREENSHOT_3, SCREENSHOT_4],

    // Techs Used
    [
        {technology: "React", percentage: 30},
        {technology: "Blazor", percentage: 40},
        {technology: "Adobe XD", percentage: 80}
    ],

    //Buttons
    [
    ],

    // Thumbnail
    THUMBNAIL,
    "UX initiative taken over Voxco’s software.",
    "Ux / Ui Design",
    "#0C0A1F",
    "next-ux"
);