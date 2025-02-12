import {ProjectContent} from "../../../views/project-view/";
import {AboutProject, RelatedLinks} from "../../../components/vertical-nav/project-nav.ts";
import {thumbnailContent} from "../../../components/thumbnail";

import WEBM_VIDEO from "./assets/voxco-proposal-showcase.webm";
import MP4_VIDEO from "./assets/voxco-proposal-showcase.mp4";

import SCREENSHOT_1 from "./assets/voxco-proposal-screenshot-1.jpg"
import SCREENSHOT_2 from "./assets/voxco-proposal-screenshot-2.jpg"
import SCREENSHOT_3 from "./assets/voxco-proposal-screenshot-3.jpg"
import SCREENSHOT_4 from "./assets/voxco-proposal-screenshot-4.jpg"

import THUMBNAIL from "./assets/voxco-proposal-thumbnail.jpg";

export const content: ProjectContent = {
    title: "INSERT",
    tagline: "INSERT",
    path: "INSERT",

    paragraphs: [
        "INSERT",
        "INSERT"
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

export const aboutInfo: AboutProject = {
    release: "INSERT",
    platforms: "INSERT",
    developer: "INSERT"
}

export const relatedLinksInfo: RelatedLinks[] = [
    ["INSERT", "INSERT URL"],
    ["INSERT", "INSERT URL"],
    ["INSERT", "INSERT URL"]
]

export const thumbnail: thumbnailContent = {
    thumbnail: THUMBNAIL,
    title: content.title,
    description: "INSERT",
    tags: ["INSERT", "INSERT"],
    path: "voxco-proposal"
}
