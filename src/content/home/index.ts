import {HomePageContentStructure} from "../../views";

import HOOK_VIDEO_WEBM from './assets/cd-labs-home-page-hook-animation.webm';
import HOOK_VIDEO_MP4 from './assets/cd-labs-home-page-hook-animation.mp4';
import PHILOSOPHY_BG_WEBM from './assets/cd-labs-home-page-philosophy-animation.webm';
import PHILOSOPHY_BG_MP4 from './assets/cd-labs-home-page-philosophy-animation.mp4';

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
        sectionBgWebem: PHILOSOPHY_BG_WEBM,
        sectionBgMp4: PHILOSOPHY_BG_MP4,
        
        header: "Games that respect <span class='highlight'>your time.</span>",
        
        paragraphs: [
            "I believe gaming should be an escape, not a second job. But as games have gotten bigger and more demanding, it's become harder to find the time to even finish one.",
            "That's why I started cd-labs. My goal is to deliver compact, complete gaming experiences that honor your schedule. Each game is a focused, handcrafted quest meant to be enjoyed in a single sitting or over a few evenings.",
        ],
        buttons: [
            { text: "Read More", path: "#", styleType: "secondary", contrastMode: 'dark' },
            { text: "First Production", path: "#", styleType: "primary", contrastMode: 'dark' }
        ],

        alignment: 'left'
    },

    // ------------------------------------------------------------------------
    teaser: {
        sectionBG: PHILOSOPHY_BG,
        sectionBgWebem: PHILOSOPHY_BG_WEBM,
        sectionBgMp4: PHILOSOPHY_BG_MP4,

        introTitle: "The First Experience is Taking Shape",
        header: "Project <span class='highlight'>Aqua</span>",

        paragraphs: [
            "Inspired by the frustrations of everyday bad design, Aqua places you in a sleek testing facility. Your mission: master a series of deceptively simple shower prototypes.",
            "In this fast-paced puzzler, can you solve one of design's most infuriating problems—the shower interface—and calibrate each prototype?",
            "<b>A sharp puzzle and a fresh perspective distilled into a single, focused game.</b"
        ],

        buttons: [
            { text: "Whishlist on Steam", path: "#", styleType: "primary", contrastMode: 'dark' },
            { text: "Follow Development", path: "#", styleType: "secondary", contrastMode: 'dark' }
        ],

        alignment: 'right'
    },

    // ------------------------------------------------------------------------
    ctaBannerA: {
        header: "Save your progress",
        body: "Don't lose your place in our story. Follow along for development checkpoints, sneak peeks, and insights into our design process.",
        buttons: [
            { text: "Follow on Instagram", path: "#", styleType: "primary", contrastMode: 'light' },
            { text: "See logs", path: "#", styleType: "secondary", contrastMode: 'light' }
        ],
        alignment: 'right'
    },

    // ------------------------------------------------------------------------
    founder: {
        sectionBG: PHILOSOPHY_BG,
        sectionBgWebem: PHILOSOPHY_BG_WEBM,
        sectionBgMp4: PHILOSOPHY_BG_MP4,

        header: "Who is <span class='highlight'>CD</span>?",

        paragraphs: [
            "Hi, I'm CD. After more than a decade as a professional designer and developer in marketing, web, and the AAA games industry, I decided to take a different path. I left the world of blockbuster recipes behind to focus on what I love most: crafting truly unique gameplay ideas.",
            "My goal with cd-labs is simple: to bring back that classic feeling of seeing a story through to its conclusion. I design my games to leave you feeling satisfied and inspired, not drained by an endless time commitment.",
        ],

        buttons: [
            { text: "Let's connect", path: "#", styleType: "primary", contrastMode: 'dark' },
            { text: "Read my story", path: "#", styleType: "secondary", contrastMode: 'dark' },
        ],

        alignment: 'left'
    },

    // ------------------------------------------------------------------------
    sideQuests: {
        sectionBG: PHILOSOPHY_BG,
        sectionBgWebem: PHILOSOPHY_BG_WEBM,
        sectionBgMp4: PHILOSOPHY_BG_MP4,

        introTitle: "Collaborating on New Interactive Adventures",
        header: "Side Quests",
        
        paragraphs: [
            "While my main quest is crafting original games for cd-labs, I also take on special contract work. These 'side quests' allow me to collaborate with innovative clients on their own interactive adventures.",
            "I apply the same philosophy of focused, user-centric design to these projects, helping build everything from polished prototypes to unique web applications. It's a chance to tackle new challenges and help bring other exciting visions to life.",
        ],
        buttons: [
            { text: "Start a side quest", path: "#", styleType: "primary", contrastMode: 'dark' },
            { text: "See our main quest", path: "#", styleType: "secondary", contrastMode: 'dark' }
        ],
        
        alignment: 'right'
    },

    // ------------------------------------------------------------------------
    ctaBannerB: {
        header: "Ready to press start?",
        body: "Follow the development of Aqua, chat with other players, and get behind-the-scenes updates in the official cd-labs Discord server.",
        buttons: [
            { text: "Join the Discord", path: "#", styleType: "primary", contrastMode: 'light' },
            { text: "Learn More", path: "#", styleType: "secondary", contrastMode: 'light' }
        ],
        alignment: 'left'
    },
}