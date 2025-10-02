import {HomePageContentStructure} from "../../views";
import { socials } from "../../components/socials";

import HOOK_VIDEO_WEBM from './assets/cd-labs-hook-animation.webm';
import HOOK_VIDEO_MP4 from './assets/cd-labs-hook-animation.mp4';

import PHILOSOPHY_BG from './assets/philosophy-background-temp.png';
import PHILOSOPHY_VIDEO_WEBM from './assets/cd-labs-philosophy-animation.webm';
import PHILOSOPHY_VIDEO_MP4 from './assets/cd-labs-philosophy-animation.mp4';
import PHILOSOPHY_VIDEO_MOBILE_WEBM from './assets/cd-labs-philosophy-mobile-animation.webm';
import PHILOSOPHY_VIDEO_MOBILE_MP4 from './assets/cd-labs-philosophy-mobile-animation.mp4';

import TEASER_VIDEO_WEBM from './assets/cd-labs-teaser-animation.webm';
import TEASER_VIDEO_MP4 from './assets/cd-labs-teaser-animation.mp4';
import TEASER_VIDEO_MOBILE_WEBM from './assets/cd-labs-teaser-mobile-animation.webm';
import TEASER_VIDEO_MOBILE_MP4 from './assets/cd-labs-teaser-mobile-animation.mp4';

import FOUNDER_VIDEO_WEBM from './assets/cd-labs-founder-animation.webm';
import FOUNDER_VIDEO_MP4 from './assets/cd-labs-founder-animation.mp4';
import FOUNDER_VIDEO_MOBILE_WEBM from './assets/cd-labs-founder-mobile-animation.webm';
import FOUNDER_VIDEO_MOBILE_MP4 from './assets/cd-labs-founder-mobile-animation.mp4';

import SIDEQUESTS_VIDEO_WEBM from './assets/cd-labs-sidequests-animation.webm';
import SIDEQUESTS_VIDEO_MP4 from './assets/cd-labs-sidequests-animation.mp4';
import SIDEQUESTS_VIDEO_MOBILE_WEBM from './assets/cd-labs-sidequests-mobile-animation.webm';
import SIDEQUESTS_VIDEO_MOBILE_MP4 from './assets/cd-labs-sidequests-mobile-animation.mp4';


export const homePageContent: HomePageContentStructure = {
    hook: {
        header: "When was the last time you **finished** a game?",
        body: "CD-Labs’ initiative is to design **complete** gaming experiences for **busy lives**.",
        videoWebem: HOOK_VIDEO_WEBM,
        videoMp4: HOOK_VIDEO_MP4,
    },

    // ------------------------------------------------------------------------
    philosophy: {
        backgrounds: {
            image: PHILOSOPHY_BG,
            webem: PHILOSOPHY_VIDEO_WEBM,
            mp4: PHILOSOPHY_VIDEO_MP4,
            mobileWebem: PHILOSOPHY_VIDEO_MOBILE_WEBM,
            mobileMp4: PHILOSOPHY_VIDEO_MOBILE_MP4,
        },

        introTitle: "Game Design Philosophy",
        header: "Games that respect <span class='highlight'>your time.</span>",
        
        paragraphs: [
            "I believe gaming should be an escape, not a **second job**. But as games have gotten bigger and more demanding, it's become harder to find the time to even **finish one**.",
            "That's why I started cd-labs. My goal is to deliver compact, **complete gaming experiences** that honor **your schedule**. Each game is a focused, handcrafted quest meant to be enjoyed in a **single sitting** or over a **few evenings**.",
        ],
        buttons: [
            { text: "Read More", path: "/about", styleType: "secondary", contrastMode: 'dark' },
            { text: "First Production", path: "#teaser", styleType: "primary", contrastMode: 'dark' }
        ],

        alignment: 'left'
    },

    // ------------------------------------------------------------------------
    teaser: {
        backgrounds: {
            image: PHILOSOPHY_BG,
            webem: TEASER_VIDEO_WEBM,
            mp4: TEASER_VIDEO_MP4,
            mobileWebem: TEASER_VIDEO_MOBILE_WEBM,
            mobileMp4: TEASER_VIDEO_MOBILE_MP4,
        },

        introTitle: "The First Experience is Taking Shape",
        header: "Project **Aqua**",

        paragraphs: [
            "Inspired by the frustrations of **everyday bad design**, Aqua places you in a sleek testing facility. Your mission: master a series of deceptively **simple shower prototypes**.",
            "In this fast-paced puzzler, can you solve one of design's most infuriating problems -> **the shower interface**, and calibrate each prototype?",
            "<b>A sharp puzzle and a fresh perspective distilled into a single, focused game.</b"
        ],

        buttons: [
            { text: "Follow Development", path: socials.instagram.url, styleType: "primary", contrastMode: 'dark', target: '_blank' }
        ],

        alignment: 'right'
    },

    // ------------------------------------------------------------------------
    ctaBannerA: {
        header: "Save your progress",
        body: "Don't lose your place in the story. Follow along for **development checkpoints**, **sneak peeks**, and insights into CD's **design process**.",
        buttons: [
            { text: "Follow on Instagram", path: socials.instagram.url, styleType: "primary", contrastMode: 'light', target: '_blank' },
            { text: "See logs", path: "/logs", styleType: "secondary", contrastMode: 'light' }
        ],
        alignment: 'right'
    },

    // ------------------------------------------------------------------------
    founder: {
        backgrounds: {
            image: PHILOSOPHY_BG,
            webem: FOUNDER_VIDEO_WEBM,
            mp4: FOUNDER_VIDEO_MP4,
            mobileWebem: FOUNDER_VIDEO_MOBILE_WEBM,
            mobileMp4: FOUNDER_VIDEO_MOBILE_MP4,
        },

        header: "Who is **CD**",

        paragraphs: [
            "Hi, I'm CD. After more than a decade as a **professional designer and developer** in marketing, web, and the AAA games industry, I decided to take a **different path**. I left the world of blockbuster recipes behind to focus on what I love most: **crafting truly unique gameplay ideas**.",
            "My goal with cd-labs is simple: to **bring back that classic feeling of seeing a story through to its conclusion**. I design my games to leave you feeling satisfied and inspired, not drained by an endless time commitment.",
        ],

        buttons: [
            { text: "Let's connect", path: socials.linkedin.url, styleType: "primary", contrastMode: 'dark', target: '_blank' },
            { text: "Read my story", path: "/about", styleType: "secondary", contrastMode: 'dark' },
        ],

        alignment: 'left'
    },

    // ------------------------------------------------------------------------
    sideQuests: {
        backgrounds: {
            image: PHILOSOPHY_BG,
            webem: SIDEQUESTS_VIDEO_WEBM,
            mp4: SIDEQUESTS_VIDEO_MP4,
            mobileWebem: SIDEQUESTS_VIDEO_MOBILE_WEBM,
            mobileMp4: SIDEQUESTS_VIDEO_MOBILE_MP4,
        },

        introTitle: "Collaborating on New Interactive Adventures",
        header: "**Side Quests**",
        
        paragraphs: [
            "While my main quest is crafting original games for cd-labs, I also take on special **contract work**. These 'side quests' allow me to collaborate with innovative clients on their own **interactive adventures**.",
            "I apply the same philosophy of **focused**, **user-centric design** to these projects, helping build everything from polished **prototypes** to unique **web applications**. It's a chance to tackle new challenges and help bring other **exciting visions** to life.",
        ],
        buttons: [
            { text: "Start a side quest", path: "/contact", styleType: "primary", contrastMode: 'dark' },
            { text: "See our main quest", path: "#teaser", styleType: "secondary", contrastMode: 'dark' }
        ],
        
        alignment: 'right'
    },

    // ------------------------------------------------------------------------
    ctaBannerB: {
        header: "Ready to press start?",
        body: "Follow the development of Aqua, chat with other players, and get behind-the-scenes updates in the official cd-labs Discord server.",
        buttons: [
            { text: "Join the Discord", path: "#", styleType: "primary", contrastMode: 'light' },
            { text: "Follow Development", path: socials.github.url, styleType: "secondary", contrastMode: 'light', target: '_blank' }
        ],
        alignment: 'left'
    },
}