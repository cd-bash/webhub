import {createProjectContent} from "../../template.ts";

import SHOWCASE_WEBM from "./assets/gbjam-12-showcase.webm";
import SHOWCASE_MP4 from "./assets/gbjam-12-showcase.mp4";

import SCREENSHOT_1 from "./assets/gbjam-12-screenshot-1.png"
import SCREENSHOT_2 from "./assets/gbjam-12-screenshot-2.png"
import SCREENSHOT_3 from "./assets/gbjam-12-screenshot-3.png"
import SCREENSHOT_4 from "./assets/gbjam-12-screenshot-4.png"

import THUMBNAIL from "./assets/gbjam-12-thumbnail.png";

//-----------------------------------------------------------------------

export const {content, techs, buttons, thumbnail} = createProjectContent(
    "GBJAM-12", // Title
    "Game Release", // Subtitle
    "Hide in perspective", // Tagline

    // Paragraphs
    [
        "A covert game that adopts a 2D perspective from above and the side, with a retro Game Boy-esque aesthetic and constraints."
    ],

    // Medias
    [SHOWCASE_WEBM, SHOWCASE_MP4],
    [SCREENSHOT_1, SCREENSHOT_2, SCREENSHOT_3, SCREENSHOT_4],

    // Techs Used
    [
        {technology: "Godot", percentage: 80},
        {technology: "Aseprite", percentage: 70},
        {technology: "Figma", percentage: 10}
    ],

    //Buttons
    [
        ["Play now", "https://cd-bash.itch.io/cd-yesterday-at-823-pm-pumpys-spooky-worlds", true],
        ["GitHub Repo", "https://github.com/cd-bash/GBJAM-12", false]
    ],

    // Thumbnail
    THUMBNAIL,
    "Game submission for the Game Boy Jam.",
    "Game Release",
    "#10140C",
    "gbjam-12",

    // Credits
    [
        ["Kevin Chiasson", "#"],
        ["Jean-Philippe Dandeneault", "#"],
        ["Félix Gagné", "#"],
    ],
);