import { AboutPageContentStructure } from '../../views/about/';

import MANIFESTO_IMG from './assets/about-manifesto-visual.png';
import PATH_IMG from './assets/about-path-visual.png';
import INITIATIVE_IMG from './assets/about-initiative-visual.png';

export const aboutContent: AboutPageContentStructure = {
    manifesto: {
        introTitle: "About cd-labs",
        header: "The manifesto for <span class='highlight'>shorter games</span>",
        visualPath: MANIFESTO_IMG,
        paragraphs: [
            "Look at the achievements for any major blockbuster game. The trophy for completing the final chapter is often one of the rarest. The data tells a clear story: a huge percentage of players never see the credits roll.",
            "It isn't a lack of passion; it's a lack of time. As our lives get busier, 100-hour epics filled with repetitive tasks begin to feel like a second job. The industry is selling promises of vast worlds that, for most people, will remain largely unexplored.",
            "This pursuit of scale also leads to bloated budgets, immense pressure on development teams, and a reliance on safe, overused formulas to justify the investment. Creativity is often the first casualty of this cycle.",
            "Shorter, focused games are the elegant solution. They respect the player's time and intelligence. They allow for healthier, more creative development. They deliver a complete, handcrafted story with a satisfying conclusion. This isn't about making 'less' of a game; it's about making 'more' of the parts that truly matter.",
        ],
        alignment: 'right',
    },

    ctaBannerA: {
        header: "Save your progress",
        body: "Don't lose your place in our story. Follow along for development checkpoints, sneak peeks, and insights into our design process.",
        buttons: [
            { text: "Follow on Instagram", path: "#", styleType: "primary", contrastMode: 'light' },
            { text: "See logs", path: "#", styleType: "secondary", contrastMode: 'light' }
        ],
        alignment: 'right'
    },

    path: {
        header: "Why I chose a <span class='highlight'>different path</span>.",
        visualPath: PATH_IMG,
        paragraphs: [
            "With a decade of experience, I've cultivated a diverse professional background as a marketing designer, UX/UI designer for web applications, and game developer. My core passion lies in games and interactive media—a burgeoning field that's reshaping the world and fostering innovation.",
            "Initially, I thought my path was in AAA studios, but I soon realized that design often takes a back seat there. Large productions typically stick to proven formulas to reduce risk. This makes sense, given the millions invested in game development and the critical need for success. However, many projects ultimately fail, games are canceled, teams are laid off, and the cycle continues. That is why, after four years of valuable experience, I decided to leave the AAA world and commit to a different path.",
        ],
        alignment: 'left',
    },

    initiative: {
        header: "The <span class='highlight'>cd-labs</span> initiative",
        visualPath: INITIATIVE_IMG,
        paragraphs: [
            "My commitment is to a different model for game development—one that’s faster, more creative, and built on a foundation of unique ideas instead of market speculation. The goal is to deliver smaller, yet complete, gaming experiences centered around innovative and engaging mechanics.",
            "This approach also aims to bring players closer to the development world. By working transparently and involving the community in the process, I can deliver regular, polished, and affordable games that truly respect the player’s time.",
        ],
        alignment: 'right',
    },

    ctaBannerB: {
        header: "Join our journey",
        body: "Be part of something exciting! Follow us on social media and stay updated with our latest news and developments.",
        buttons: [
            { text: "Follow on Twitter", path: "#", styleType: "primary", contrastMode: 'light' },
            { text: "Like on Facebook", path: "#", styleType: "secondary", contrastMode: 'light' }
        ],
        alignment: 'left'
    },  
}