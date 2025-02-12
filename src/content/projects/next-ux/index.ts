import {ProjectContent} from "../../../views/project-view";
import {AboutProject, RelatedLinks} from "../../../components/vertical-nav/project-nav.ts";
import {thumbnailContent} from "../../../components/thumbnail";

import WEBM_VIDEO from "./assets/nextUX-showcase.webm";
import MP4_VIDEO from "./assets/nextUX-showcase.mp4";

import SCREENSHOT_1 from "./assets/nextUX-screenshot-1.jpg"
import SCREENSHOT_2 from "./assets/nextUX-screenshot-2.jpg"
import SCREENSHOT_3 from "./assets/nextUX-screenshot-3.jpg"
import SCREENSHOT_4 from "./assets/nextUX-screenshot-4.jpg"

import THUMBNAIL from "./assets/nextUX-thumbnail.jpg";


export const content: ProjectContent = {
    title: "Next UX",
    tagline: "Not just a visual revamp",
    path: "www.charlesdoucet.com/interactive/",

    paragraphs: [
        "Bringing a UX perspective to Voxco’s software. This includes a complete revamp of the user interfaces, but also a shift in the development’s mindset. The new UI is more user-friendly and gives user flexibility on the customization of their workspaces.",
        "While I’m leading the UX initiative, it’s crucial for me to establish a collaborative environment between developers, users and the other important actors. That said, even if I design and make prototypes, this is by far the most team-based project I had the chance to work on. And it’s evolving every day."
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
    release: "March 20, 2021",
    platforms: "Web, React",
    developer: "Charles Doucet"
}

export const relatedLinksInfo: RelatedLinks[] = [
    ["Process Journal", "https://github.com/charlesDouc/CART-415/wiki"],
    ["GitHub Project", "https://github.com/charlesDouc/CART-415/wiki"]
]

export const thumbnail: thumbnailContent = {
    thumbnail: THUMBNAIL,
    title: content.title,
    description: "A complete revamp of the user interfaces for a better experience.",
    tags: ["UX Design", "React"],
    path: "next-ux"
}