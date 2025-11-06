import { LogArticleContentStructure } from '../../../../views/logs';
import { LogArticleMetadata } from '../..';
import { parseMarkdownArticle } from '../../../../views/utils/markdown-parser';
import { socials } from '../../../../components/socials';

import articleMarkdown from './article.md?raw';

import HEADER_IMAGE from './assets/introducing-shower-ui_logHeader.png';
import THUMBNAIL from './assets/introducing-shower-ui_thumbnail.png';

import GODOT_IMAGE from './assets/shower-ui-intro-godot-engine.png';
import DITHERING_IMAGE from './assets/shower-ui-intro-dithering-shader.png';

export const logMetadata: LogArticleMetadata = {
    id: 'introducing-shower-ui',
    title: "Introducing Shower UI, My First cd-labs Project",
    subtitle: 'A Game About That One Thing You Hate.',
    date: '2025-11-06',
    published: true,
    heroVisual: THUMBNAIL,
    tags: ['Game Dev', 'Godot', 'Shower UI', 'Main Quest']
};

// ------------------------------------------------------------------------

export const logContent: LogArticleContentStructure = {
    ...parseMarkdownArticle(articleMarkdown, {
        metadata: logMetadata,
        headerImage: HEADER_IMAGE,
        assets: {
            GODOT_IMAGE,
            DITHERING_IMAGE,
        }
    }),
    callToAction: {
            header: "Save your progress",
            body: "Don't lose your place in the story. Follow along for **development checkpoints**, **sneak peeks**, and insights into CD's **design process**.",
            buttons: [
                { text: "Follow on Instagram", path: socials.instagram.url, styleType: "primary", contrastMode: 'light', target: '_blank' },
                { text: "See logs", path: "/logs", styleType: "secondary", contrastMode: 'light' }
            ],
            alignment: 'right'
    },
};