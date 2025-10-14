import { LogArticleContentStructure } from '../../../../views/logs';
import { LogArticleMetadata } from '../../../logs';
import { parseMarkdownArticle } from '../../../../views/utils/markdown-parser';
import { socials } from '../../../../components/socials';

import articleMarkdown from './article.md?raw';

import THUMBNAIL from './assets/building-typescript-webapp_thumbnail.png';
import HEADER_IMAGE from './assets/building-typescript-webapp_logHeader.png';

import CORE_CODE_IMAGE from './assets/log-code-buildingWebsite-core.png';
import VIEWS_CODE_IMAGE_A from './assets/log-code-buildingWebsite-view-layer-a.png';
import VIEWS_CODE_IMAGE_B from './assets/log-code-buildingWebsite-view-layer-b.png';
import VIEWS_CODE_IMAGE_C from './assets/log-code-buildingWebsite-view-layer-c.png';
import VIEWS_CODE_IMAGE_D from './assets/log-code-buildingWebsite-view-layer-d.png';
import CONTENT_CODE_IMAGE from './assets/log-code-buildingWebsite-content.png';
import COMPONENTS_CODE_IMAGE from './assets/log-code-buildingWebsite-components.png';
import STYLES_CODE_IMAGE from './assets/log-code-buildingWebsite-styles.png';

export const logMetadata: LogArticleMetadata = {
    id: 'building-typescript-web-app',
    title: 'Building a Modern Web Application with Pure TypeScript',
    subtitle: 'A Minimalist Architecture Approach',
    date: '2025-10-09',
    published: true,
    heroVisual: THUMBNAIL,
    tags: ['TypeScript', 'Web Development', 'Architecture', 'Minimalism']
};

// ------------------------------------------------------------------------

export const logContent: LogArticleContentStructure = {
    ...parseMarkdownArticle(articleMarkdown, {
        metadata: logMetadata,
        headerImage: HEADER_IMAGE,
        assets: {
            CORE_CODE_IMAGE,
            VIEWS_CODE_IMAGE_A,
            VIEWS_CODE_IMAGE_B,
            VIEWS_CODE_IMAGE_C,
            VIEWS_CODE_IMAGE_D,
            CONTENT_CODE_IMAGE,
            COMPONENTS_CODE_IMAGE,
            STYLES_CODE_IMAGE
        }
    }),
    callToAction: {
        header: "Available on GitHub",
        body: "This website's source code can be found on my GitHub. Feel free to explore and the repository!",
        buttons: [
            { text: "View Repository", path: socials.github.url, styleType: "primary", contrastMode: 'light', target: '_blank' },
            { text: "Contact Me", path: "/contact", styleType: "secondary", contrastMode: 'light' },
        ],
        alignment: 'left',
    }
};