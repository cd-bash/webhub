import {createProjectContent} from "../template.ts";

import SHOWCASE_WEBM from "./assets/swan-lake-showcase.webm";
import SHOWCASE_MP4 from "./assets/swan-lake-showcase.mp4";

import SCREENSHOT_1 from "./assets/swan-lake-screenshot-1.jpg"
import SCREENSHOT_2 from "./assets/swan-lake-screenshot-2.jpg"
import SCREENSHOT_3 from "./assets/swan-lake-screenshot-3.jpg"
import SCREENSHOT_4 from "./assets/swan-lake-screenshot-4.jpg"

import THUMBNAIL from "./assets/swan-lake-thumbnail.png";

//-----------------------------------------------------------------------

export const {content, techs, buttons, thumbnail} = createProjectContent(
    "Swan Lake", // Title
    "Animation - Fall 2017", // Subtitle
    "The Letter Company", // Tagline

    // Paragraphs
    [
        "Interpretation of the classic ballet Swan Lake using only letters and typography in a minimalist landscape."
    ],

    // Medias
    [SHOWCASE_WEBM, SHOWCASE_MP4],
    [SCREENSHOT_1, SCREENSHOT_2, SCREENSHOT_3, SCREENSHOT_4],

    // Techs Used
    [
        {technology: "Illustrator", percentage: 10},
        {technology: "After Effect", percentage: 80},
        {technology: "Premiere Pro", percentage: 60}
    ],

    //Buttons
    [
        ["See the movie", "https://www.youtube.com/watch?v=MGab-x3gMIg&ab_channel=cd-bash", true],
    ],

    // Thumbnail
    THUMBNAIL,
    "Animation of the dramatic story.",
    "Animation",
    "#5A06A2",
    "swan-lake"
);