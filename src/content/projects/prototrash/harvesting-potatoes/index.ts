import {createProjectContent} from "../../template.ts";

import SHOWCASE_WEBM from "./assets/harvesting-potatoes-showcase.webm";
import SHOWCASE_MP4 from "./assets/harvesting-potatoes-showcase.mp4";

import SCREENSHOT_1 from "./assets/harvesting-potatoes-screenshot-1.png"
import SCREENSHOT_2 from "./assets/harvesting-potatoes-screenshot-2.png"
import SCREENSHOT_3 from "./assets/harvesting-potatoes-screenshot-3.png"
import SCREENSHOT_4 from "./assets/harvesting-potatoes-screenshot-4.png"

import THUMBNAIL from "./assets/harvesting-potatoes-thumbnail.png";

//-----------------------------------------------------------------------

export const {content, techs, buttons, thumbnail} = createProjectContent(
    "Harvesting Potatoes", // Title
    "Game prototype", // Subtitle
    "Master of the potatoes", // Tagline

    // Paragraphs
    [
        "Take over a farm, harvest living potatoes, and watch them come alive. Procedural mapping and 3D modelling experiments."
    ],

    // Medias
    [SHOWCASE_WEBM, SHOWCASE_MP4],
    [SCREENSHOT_1, SCREENSHOT_2, SCREENSHOT_3, SCREENSHOT_4],

    // Techs Used
    [
        {technology: "Unity 3D", percentage: 80},
        {technology: "Blender", percentage: 80},
        {technology: "Shaderlab", percentage: 35}
    ],

    //Buttons
    [
        ["GitHub Repo", "https://github.com/WeAreTwo/Potato-Game", true]
    ],

    // Thumbnail
    THUMBNAIL,
    "A potato planting potatoes.",
    "Game prototype",
    "#4E5145",
    "harvesting-potatoes"
);