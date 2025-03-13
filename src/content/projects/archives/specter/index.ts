import {createProjectContent} from "../../template.ts";

import SHOWCASE_WEBM from "./assets/specter-showcase.webm";
import SHOWCASE_MP4 from "./assets/specter-showcase.mp4";

import SCREENSHOT_1 from "./assets/specter-screenshot-1.jpg"
import SCREENSHOT_2 from "./assets/specter-screenshot-2.jpg"
import SCREENSHOT_3 from "./assets/specter-screenshot-3.jpg"
import SCREENSHOT_4 from "./assets/specter-screenshot-4.jpg"

import THUMBNAIL from "./assets/specter-thumbnail.png";

//-----------------------------------------------------------------------

export const {content, techs, buttons, thumbnail} = createProjectContent(
    "Specter", // Title
    "Game release", // Subtitle
    "Console-Based Puzzle Game", // Tagline

    // Paragraphs
    [
        "The user must navigate through a sequence of stages in a software program that is reminiscent of the 1990s hacking culture and the early days of the internet."
    ],

    // Medias
    [SHOWCASE_WEBM, SHOWCASE_MP4],
    [SCREENSHOT_1, SCREENSHOT_2, SCREENSHOT_3, SCREENSHOT_4],

    // Techs Used
    [
        {technology: "Unity 3D", percentage: 90},
        {technology: "Blender", percentage: 20},
        {technology: "Console", percentage: 30}
    ],

    //Buttons
    [
        ["Play now", "https://cd-bash.itch.io/specter", true],
        ["Process Journal", "https://github.com/cd-bash/Specter/wiki", false],
        ["GitHub Repo", "https://github.com/cd-bash/Specter", false]
    ],

    // Thumbnail
    THUMBNAIL,
    "Puzzle game based on text commands.",
    "Game release",
    "#0A0A0A",
    "specter"
);