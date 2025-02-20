import {ProjectContent} from "../../../views/project-view/";
import {ButtonLink} from "../../../components/vertical-nav/info-project.ts";
import {thumbnailContent} from "../../../components/thumbnail";

import WEBM_VIDEO from "./assets/next-ux-showcase.webm";
import MP4_VIDEO from "./assets/next-ux-showcase.mp4";

import SCREENSHOT_1 from "./assets/next-ux-screenshot-1.jpg"
import SCREENSHOT_2 from "./assets/next-ux-screenshot-2.jpg"
import SCREENSHOT_3 from "./assets/next-ux-screenshot-3.jpg"
import SCREENSHOT_4 from "./assets/next-ux-screenshot-4.jpg"

import THUMBNAIL from "./assets/next-ux-thumbnail.jpg";

export const content: ProjectContent = {
    title: "Next UX",
    subtitle: "web app ux / ui - 2021",
    
    tagline: "Clear Workflows ",
    paragraphs: [
        "Complete overhaul of Voxco's product line, including a redesigned user flow and interface."
    ],

    heroVideo: [
        WEBM_VIDEO,
        MP4_VIDEO
    ],

    imageGallery: [
        SCREENSHOT_1,
        SCREENSHOT_2,
        SCREENSHOT_3,
        SCREENSHOT_4
    ]
}

export const buttons: ButtonLink[] = [
    [
        "INSERT", 
        "INSERT URL",
        true
    ],
    [
        "INSERT", 
        "INSERT URL",
        false
    ],
]

export const thumbnail: thumbnailContent = {
    thumbnail: THUMBNAIL,
    title: content.title,
    description: "INSERT",
    tags: ["INSERT", "INSERT"],
    path: "next-ux"
}
