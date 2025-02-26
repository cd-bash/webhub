import {createProjectContent} from "../template.ts";

import SHOWCASE_WEBM from "./assets/kiriko-showcase.webm";
import SHOWCASE_MP4 from "./assets/kiriko-showcase.mp4";

import SCREENSHOT_1 from "./assets/kiriko-screenshot-1.jpg"
import SCREENSHOT_2 from "./assets/kiriko-screenshot-2.jpg"
import SCREENSHOT_3 from "./assets/kiriko-screenshot-3.jpg"
import SCREENSHOT_4 from "./assets/kiriko-screenshot-4.jpg"

import THUMBNAIL from "./assets/kiriko-thumbnail.png";

//-----------------------------------------------------------------------

export const {content, techs, buttons, thumbnail} = createProjectContent(
    "Kiriko", // Title
    "Immersive Experience - Fall 2018", // Subtitle
    "A VR Installation", // Tagline

    // Paragraphs
    [
        "Users wear VR headsets, passively observing the environment’s evolution. Another participant makes modifications, manipulating a tangible interface to alter the virtual world."
    ],

    // Medias
    [SHOWCASE_WEBM, SHOWCASE_MP4],
    [SCREENSHOT_1, SCREENSHOT_2, SCREENSHOT_3, SCREENSHOT_4],

    // Techs Used
    [
        {technology: "Unity 3D", percentage: 90},
        {technology: "Illustrator", percentage: 75},
        {technology: "Build", percentage: 55}
    ],

    //Buttons
    [
        ["LABEL", "LINK", true],
        ["LABEL", "LINK", false]
    ],

    // Thumbnail
    THUMBNAIL,
    "SUMMARY",
    "TAG",
    "#0D0328",
    "kiriko",

    // Credits
    [
        ["Ali Egseem", "#"],
        ["Valerie Bourdon", "https://www.instagram.com/valeriebourdon_/"],
        ["Michaël Petitclerc", "#"],
        ["Codrin Mihail", "https://codrinmihail.com/"],
    ]
);