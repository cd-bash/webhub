import {ProjectContent} from "../../../views/project.ts";
import {ButtonLink} from "../../../components/vertical-nav/info-project.ts";
import {thumbnailContent} from "../../../components/thumbnail";

import WEBM_VIDEO from "./assets/spaceCompass-showcase.webm";
import MP4_VIDEO from "./assets/spaceCompass-showcase.mp4";

import SCREENSHOT_1 from "./assets/spaceCompass-screenshot-1.jpg"
import SCREENSHOT_2 from "./assets/spaceCompass-screenshot-2.jpg"
import SCREENSHOT_3 from "./assets/spaceCompass-screenshot-3.jpg"
import SCREENSHOT_4 from "./assets/spaceCompass-screenshot-4.jpg"

import THUMBNAIL from "./assets/spaceCompass-thumbnail.jpg";
import {TechUsage} from "../../../components/three-radar-chart/radar.ts";


export const content: ProjectContent = {
    title: "Space Compass",
    subtitle: "game prototype - winter 2020",

    tagline: "Radial Navigation",
    paragraphs: [
        "This space-themed shooter features circular movement constraints, requiring players to evade or eliminate various asteroids and structures."
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

export const techs: TechUsage[] = [
    {
        technology: "Unity 3D",
        percentage: 85
    },
    {
        technology: "Blender",
        percentage: 50
    },
    {
        technology: "Adobe XD",
        percentage: 50
    }
]

export const buttons: ButtonLink[] = [
    [
        "Try It Online",
        "https://play.unity.com/mg/other/space-compass",
        true
    ],
    [
        "Access the Repo",
        "https://github.com/cd-bash",
        false
    ]
]

export const thumbnail: thumbnailContent = {
    thumbnail: THUMBNAIL,
    title: content.title,
    description: "A space shooter where players must dodge and destroy asteroids for high scores.",
    tags: ["Unity", "Game Design"],
    path: "space-compass"
}