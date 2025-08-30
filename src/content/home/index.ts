import {HomePageContentStructure} from "../../views";

import HOOK_VIDEO_WEBM from './assets/cd-labs-home-page-hook-animation.webm';
import HOOK_VIDEO_MP4 from './assets/cd-labs-home-page-hook-animation.mp4';

import PHILOSOPHY_BG from './assets/philosophy-background-temp.png';

export const homePageContent: HomePageContentStructure = {
    hook: {
        header: "When was the last time you <span class='highlight'>finished</span> a game?",
        body: "CD-Labs’ initiative is to design <b>complete</b> gaming experiences for <b>busy lives</b>.",
        videoWebem: HOOK_VIDEO_WEBM,
        videoMp4: HOOK_VIDEO_MP4,
    },

    // ------------------------------------------------------------------------
    philosophy: {
        sectionBG: PHILOSOPHY_BG,
        header: "Games that respect <span class='highlight'>your time.</span>",
        
        paragraphs: [
            "I believe gaming should be an escape, not a second job. But as games have gotten bigger and more demanding, it's become harder to find the time to even finish one.",
            "That's why I started cd-labs. My goal is to deliver compact, complete gaming experiences that honor your schedule. Each game is a focused, handcrafted quest meant to be enjoyed in a single sitting or over a few evenings.",
        ],
        buttons: [
            { text: "Read More", path: "#", styleType: "secondary" },
            { text: "First Production", path: "#", styleType: "primary" }
        ],

        alignment: 'left'
    },

    // ------------------------------------------------------------------------
    teaser: {
        sectionBG: PHILOSOPHY_BG,

        introTitle: "The First Experience is Taking Shape",
        header: "Project <span class='highlight'>Aqua</span>",

        paragraphs: [
            "Inspired by the frustrations of everyday bad design, Aqua places you in a sleek testing facility. Your mission: master a series of deceptively simple shower prototypes.",
            "In this fast-paced puzzler, can you solve one of design's most infuriating problems—the shower interface—and calibrate each prototype?",
            "<b>A sharp puzzle and a fresh perspective distilled into a single, focused game.</b"
        ],

        buttons: [
            { text: "Whishlist on Steam", path: "#", styleType: "primary" },
            { text: "Follow Development", path: "#", styleType: "secondary" }
        ],

        alignment: 'right'
    },

    // ------------------------------------------------------------------------
    founder: {
        sectionBG: PHILOSOPHY_BG,
        header: "Who is <span class='highlight'>CD</span>?",

        paragraphs: [
            "Hi, I'm CD. After more than a decade as a professional designer and developer in marketing, web, and the AAA games industry, I decided to take a different path. I left the world of blockbuster recipes behind to focus on what I love most: crafting truly unique gameplay ideas.",
            "My goal with cd-labs is simple: to bring back that classic feeling of seeing a story through to its conclusion. I design my games to leave you feeling satisfied and inspired, not drained by an endless time commitment.",
        ],

        buttons: [
            { text: "Let's connect", path: "#", styleType: "primary" },
            { text: "Read my story", path: "#", styleType: "secondary" },
        ],

        alignment: 'left'
    }
}