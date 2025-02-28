import {createProjectContent} from "../../template.ts";

import SHOWCASE_WEBM from "./assets/typograzoo-showcase.webm";
import SHOWCASE_MP4 from "./assets/typograzoo-showcase.mp4";

import SCREENSHOT_1 from "./assets/typograzoo-screenshot-1.jpg"
import SCREENSHOT_2 from "./assets/typograzoo-screenshot-2.jpg"
import SCREENSHOT_3 from "./assets/typograzoo-screenshot-3.jpg"
import SCREENSHOT_4 from "./assets/typograzoo-screenshot-4.jpg"
import SCREENSHOT_5 from "./assets/typograzoo-screenshot-5.jpg"
import SCREENSHOT_6 from "./assets/typograzoo-screenshot-6.jpg"

import THUMBNAIL from "./assets/typograzoo-thumbnail.png";

//-----------------------------------------------------------------------

export const {content, techs, buttons, thumbnail} = createProjectContent(
    "Typograzoo", // Title
    "Game Prototype", // Subtitle
    "No creatures, just alphabets and symbols", // Tagline

    // Paragraphs
    [
        "Walking simulator where the player visits a zoo and observes the behaviour of typographic shapes."
    ],

    // Medias
    [SHOWCASE_WEBM, SHOWCASE_MP4],
    [SCREENSHOT_1, SCREENSHOT_2, SCREENSHOT_3, SCREENSHOT_4, SCREENSHOT_5, SCREENSHOT_6],

    // Techs Used
    [
        {technology: "Unity 3D", percentage: 80},
        {technology: "Blender", percentage: 40},
        {technology: "Illustrator", percentage: 20}
    ],

    //Buttons
    [
        ["See it in action", "https://www.youtube.com/watch?v=o3TwD0hZYfs&ab_channel=cd-bash", true],
    ],

    // Thumbnail
    THUMBNAIL,
    "Alive, letters and symbols.",
    "Game prototype",
    "#2F4769",
    "typograzoo"
);