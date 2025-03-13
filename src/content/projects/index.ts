import {projectView, renderView} from "../../views";
import {projectInfo} from "../../components/vertical-nav/info-project.ts";
import {renderBreadcrumbs, renderNavInfo} from "../../components/vertical-nav";
import {projectThumbnail} from "../../components/thumbnail-project";
import {BreadcrumbCategory, breadcrumbs, BreadcrumbsLink} from "../../components/breadcrumbs";
import {interactiveView} from "../../views/interactive.ts";

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
    const navInfo = projectInfo(buttons, techs);

    renderBreadcrumbs(breadcrumbs(trackBreadcrumbs(content.title)));
    renderNavInfo(navInfo);
    renderView(viewContent);
}

export function buildInteractivePage() {
    const viewContent = interactiveView();

    renderView(viewContent);

}

export function buildThumbnailList(category: ProjectCategory = 'latest') {
    const list = document.createElement('ul');
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

function trackBreadcrumbs(currentTrack: string) {
    const projectBreadcrumbs: BreadcrumbsLink[] = [
        ["home", "/", BreadcrumbCategory.HOME],
        ['interactive', '/interactive', BreadcrumbCategory.INTERACTIVE],
        [currentTrack, '/' + currentTrack, BreadcrumbCategory.PROJECT]
    ]

    return projectBreadcrumbs;
}



