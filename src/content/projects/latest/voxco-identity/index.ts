import {createProjectContent} from "../../template.ts";

import SHOWCASE_WEBM from "./assets/voxco-identity-showcase.webm";
import SHOWCASE_MP4 from "./assets/voxco-identity-showcase.mp4";

import SCREENSHOT_1 from "./assets/voxco-identity-screenshot-1.jpg"
import SCREENSHOT_2 from "./assets/voxco-identity-screenshot-2.jpg"
import SCREENSHOT_3 from "./assets/voxco-identity-screenshot-3.jpg"
import SCREENSHOT_4 from "./assets/voxco-identity-screenshot-4.jpg"

import THUMBNAIL from "./assets/voxco-identity-thumbnail.png";

//-----------------------------------------------------------------------

export const { content, techs, buttons, thumbnail } = createProjectContent(
    "Voxco Identity", // Title
    "Graphic Design", // Subtitle
    "Trying a new dimension", // Tagline

    // Paragraphs
    [
        "A marketing team initiative aspiring to create a distinctive brand identity for a B2B software company using orthographic 3D visuals."
    ],

    // Medias
    [ SHOWCASE_WEBM, SHOWCASE_MP4 ],
    [ SCREENSHOT_1, SCREENSHOT_2, SCREENSHOT_3, SCREENSHOT_4 ],

    // Techs Used
    [
        { technology: "Divi", percentage: 30 },
        { technology: "Blender", percentage: 80 },
        { technology: "Adobe XD", percentage: 20 }
    ],

    //Buttons
    [
        ["Assets Gym", "LINK", true]
    ],

    // Thumbnail
    THUMBNAIL,
    "New visual identity for Voxco’s website.",
    "Graphic Design",
    "#1FA1B9",
    "voxco-identity",
);