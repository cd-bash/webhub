import {createProjectContent} from "../../template.ts";

import SHOWCASE_WEBM from "./assets/space-program-showcase.webm";
import SHOWCASE_MP4 from "./assets/space-program-showcase.mp4";

import SCREENSHOT_1 from "./assets/space-program-screenshot-1.jpg"
import SCREENSHOT_2 from "./assets/space-program-screenshot-2.jpg"
import SCREENSHOT_3 from "./assets/space-program-screenshot-3.jpg"
import SCREENSHOT_4 from "./assets/space-program-screenshot-4.jpg"

import THUMBNAIL from "./assets/space-program-thumbnail.png";

//-----------------------------------------------------------------------

export const {content, techs, buttons, thumbnail} = createProjectContent(
    "Space Program", // Title
    "Game Prototype - Winter 2019", // Subtitle
    "An Internship in Space", // Tagline

    // Paragraphs
    [
        "A solo space game where you play as an astronaut intern tasked with maintaining a series of utility terminals. But hey, at least you’re in space. "
    ],

    // Medias
    [SHOWCASE_WEBM, SHOWCASE_MP4],
    [SCREENSHOT_1, SCREENSHOT_2, SCREENSHOT_3, SCREENSHOT_4],

    // Techs Used
    [
        {technology: "Unity 3D", percentage: 80},
        {technology: "Blender", percentage: 30},
        {technology: "Illustrator", percentage: 60}
    ],

    //Buttons
    [
        ["Video Demo", "https://www.youtube.com/watch?v=6FLp1SuoFXA&t=5s&ab_channel=cd-bash", true],
    ],

    // Thumbnail
    THUMBNAIL,
    "Astronauts during a training internship.",
    "Game Prototype",
    "#020C11",
    "space-program",

    // Credits
    [
        ["Ali Egseem", "#"],
        ["Valerie Bourdon", "https://www.instagram.com/valeriebourdon_/"],
        ["Michaël Petitclerc", "#"],
        ["Codrin Mihail", "https://codrinmihail.com/"],
    ],
);