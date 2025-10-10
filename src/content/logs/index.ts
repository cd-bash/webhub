import { getAllLogMetadata, getAllLogArticles, getLatestLogArticles } from './registry';
import { socials } from '../../components/socials';
import { logsContentStructure } from '../../views';

export * from './registry';

export type LogArticleMetadata = {
    id: string;
    title: string;
    subtitle: string;
    date: string;
    excerpt: string;
    tags?: string[];
    published: boolean;
    heroVisual?: string;
    ogImage?: string;
    readTime?: string;
}

export const logsContent: logsContentStructure = {
    title: "**Logs**",
    subtitle: "Development updates and musings",

    getAllArticles: getAllLogArticles,
    getAllMetadata: getAllLogMetadata,
    getLatestArticles: getLatestLogArticles,

    callToAction: {
        header: "Access my code",
        body: "I post most of my project on GitHub, including this website. Feel free to explore the code, suggest improvements, or get inspired!",
        buttons: [
            { text: "Follow Development", path: socials.github.url, styleType: "primary", contrastMode: 'light', target: '_blank' },
            { text: "Contact me", path: "/contact", styleType: "secondary", contrastMode: 'light' },
        ],
        alignment: 'left',
    }
}

