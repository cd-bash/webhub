import {ProjectContent} from "../../../views/project-view";
import {AboutProject, RelatedLinks} from "../../../components/vertical-nav/project-nav.ts";
import {thumbnailContent} from "../../../components/thumbnail";

import WEBM_VIDEO from "./assets/spaceCompass-showcase.webm";
import MP4_VIDEO from "./assets/spaceCompass-showcase.mp4";

import SCREENSHOT_1 from "./assets/spaceCompass-screenshot-1.jpg"
import SCREENSHOT_2 from "./assets/spaceCompass-screenshot-2.jpg"
import SCREENSHOT_3 from "./assets/spaceCompass-screenshot-3.jpg"
import SCREENSHOT_4 from "./assets/spaceCompass-screenshot-4.jpg"

import THUMBNAIL from "./assets/spaceCompass-thumbnail.jpg";


export const content: ProjectContent = {
    name: "Space Compass",
    tagline: "A 360 Odyssey",
    path: "www.charlesdoucet.com/interactive/",

    paragraphs: [
        "The core goal in the making of Space Compass was to end up with a playable game in short delays. A bit like a personal game jam! The game is a space shooter, where players’ movement is limited around a circle’s circumference. Player needs to dodge or destroy several asteroids, as well as some structures in the way.",
        "I’ve put a lot of effort in the UI elements like the main menu and the in-game interfaces. I wanted those interfaces to be dynamic and attractive while being in a minimal environment."
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
    release: "March 20, 2020",
    platforms: "Web, Windows, Mac",
    developer: "Charles Doucet"
}

export const relatedLinksInfo: RelatedLinks[] = [
    ["Process Journal", "https://github.com/charlesDouc/CART-415/wiki"],
    ["GitHub Project", "https://github.com/charlesDouc/CART-415/wiki"]
]

export const thumbnail: thumbnailContent = {
    thumbnail: THUMBNAIL,
    title: content.name,
    description: "A space shooter where the player has to dodge and destroy asteroids to get the highest score.",
    tags: ["Unity", "Game Design"],
    path: "space-compass"
}