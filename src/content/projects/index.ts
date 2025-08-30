import {projectView, renderView} from "../../views";
import {projectThumbnail} from "../../components/thumbnail-project";

import {archivePageReferences} from "./archives";
import {latestPageReferences} from "./latest";
import {prototrashPageReferences} from "./prototrash";

export type ProjectCategory = 'latest' | 'archive' | 'prototrash';

const pageReferences: { [key: string]: any } = {
    ...latestPageReferences,
    ...archivePageReferences,
    ...prototrashPageReferences
};


//-----------------------------------------------------------------------

export function buildProjectPage(pageReference: string) {
    const page = pageReferences[pageReference];
    if (!page) {
        console.error(`Project page reference "${pageReference}" not found.`);
        return;
    }
    const { content, techs, buttons } = page;
    const viewContent = projectView(content);
    
    renderView(viewContent);
}

export function buildThumbnailList(category: ProjectCategory = 'latest') {
    const list = document.createElement('ul');
    list.className = 'thumbnail-list';
    const categoryMap: { [key: string]: { [key: string]: any } } = {
        'latest': latestPageReferences,
        'prototrash': prototrashPageReferences,
        'archive': archivePageReferences,
    };

    const pages = Object.values(categoryMap[category] || latestPageReferences);

    for (let i = 0; i < pages.length; i++) {
        const { thumbnail } = pages[i];
        const item = projectThumbnail(thumbnail, false);
        list.appendChild(item);
    }

    return list;
}

//-----------------------------------------------------------------------





