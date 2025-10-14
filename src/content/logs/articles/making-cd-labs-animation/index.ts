import { LogArticleContentStructure } from '../../../../views/logs';
import { LogArticleMetadata } from '../../../logs';
import { parseMarkdownArticle } from '../../../../views/utils/markdown-parser';

import articleMarkdown from './article.md?raw';

import THUMBNAIL from './assets/making-cd-labs-animation_thumbnail.png';
import HEADER_IMAGE from './assets/making-cd-labs-animation_logHeader.png';

import STORYBOARD_IMAGE from './assets/cd-labs-animation-storyboard.png';
import THE_GRID_IMAGE from './assets/cd-labs-animation-theGrid.png';
import THE_GRID_NODES_IMAGE from './assets/cd-labs-animation-theGrid_GN.png';
import CD_LOGO_IMAGE from './assets/cd-labs-animation-cdLogo.png';
import CD_LOGO_NODES_IMAGE from './assets/cd-labs-animation-cdLogo_GN.png';
import LASER_IMAGE from './assets/cd-labs-animation-laser.png';
import CABLES_IMAGE from './assets/cd-labs-animation-cables.png';
import FINAL_IMAGE from './assets/cd-labs-animation-final.png';

export const logMetadata: LogArticleMetadata = {
    id: 'making-cd-labs-animation',
    title: "Making cd-labs animation with Blender's EEVEE and Geometry Nodes",
    subtitle: "From paper to full 3D animation",
    date: "2025-10-15",
    published: true,
    heroVisual: THUMBNAIL,
    tags: ["Blender", "3D Animation", "EEVEE", "Geometry Nodes"]
};

// ------------------------------------------------------------------------

export const logContent: LogArticleContentStructure = parseMarkdownArticle(articleMarkdown, {
    metadata: logMetadata,
    headerImage: HEADER_IMAGE,
    assets: {
        STORYBOARD_IMAGE,
        THE_GRID_IMAGE,
        THE_GRID_NODES_IMAGE,
        CD_LOGO_IMAGE,
        CD_LOGO_NODES_IMAGE,
        LASER_IMAGE,
        CABLES_IMAGE,
        FINAL_IMAGE,
    }
});