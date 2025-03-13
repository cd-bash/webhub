import {createProjectContent} from "../../template.ts";

import SHOWCASE_WEBM from "./assets/productivity-showcase.webm";
import SHOWCASE_MP4 from "./assets/productivity-showcase.mp4";

import SCREENSHOT_1 from "./assets/productivity-screenshot-1.png"
import SCREENSHOT_2 from "./assets/productivity-screenshot-2.png"
import SCREENSHOT_3 from "./assets/productivity-screenshot-3.png"
import SCREENSHOT_4 from "./assets/productivity-screenshot-4.png"

import THUMBNAIL from "./assets/productivity-thumbnail.png";

//-----------------------------------------------------------------------

export const {content, techs, buttons, thumbnail} = createProjectContent(
    "Productivity", // Title
    "Game Prototype", // Subtitle
    "Find the perfect spot", // Tagline

    // Paragraphs
    [
        "Command a standing desk by going up and down. The user at the desk will change stance depending on the desk's configuration."
    ],

    // Medias
    [SHOWCASE_WEBM, SHOWCASE_MP4],
    [SCREENSHOT_1, SCREENSHOT_2, SCREENSHOT_3, SCREENSHOT_4],

    // Techs Used
    [
        {technology: "Unity 3D", percentage: 75},
        {technology: "Blender", percentage: 60},
        {technology: "Figma", percentage: 20}
    ],

    //Buttons
    [
        ["Assets Gym", "LINK", true],
        ["GitHub Repo", "LINK", false]
    ],

    // Thumbnail
    THUMBNAIL,
    "You are the standing desk.",
    "Game prototype",
    "#F59B51",
    "productivity"
);