import {HomePageContentStructure} from "../../views";

import HOOK_VIDEO_WEBM from './assets/cd-labs-home-page-hook-animation.webm';
import HOOK_VIDEO_MP4 from './assets/cd-labs-home-page-hook-animation.mp4';

import PHILOSOPHY_BG from './assets/philosophy-background-temp.png';

export const homePageContent: HomePageContentStructure = {
    hookHeading: "When was the last time you <span class='highlight'>finished</span> a game?",
    hookBody: "CD-Labs’ initiative is to design <b>complete</b> gaming experiences for <b>busy lives</b>.",
    hookVideoWebm: HOOK_VIDEO_WEBM,
    hookVideoMp4: HOOK_VIDEO_MP4,

    philosophy: {
        sectionBG: PHILOSOPHY_BG,
        header: "Games that respect <span class='highlight'>your time.</span>",
        paragraphs: [
            "I believe gaming should be an escape, not a second job. But as games have gotten bigger and more demanding, it's become harder to find the time to even finish one.",
            "That's why I started cd-labs. My goal is to deliver compact, complete gaming experiences that honor your schedule. Each game is a focused, handcrafted quest meant to be enjoyed in a single sitting or over a few evenings.",
        ]
    }
}