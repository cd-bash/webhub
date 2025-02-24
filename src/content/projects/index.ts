import {projectView, renderView} from "../../views";
import {projectInfo} from "../../components/vertical-nav/info-project.ts";
import {renderBreadcrumbs, renderNavInfo} from "../../components/vertical-nav";
import {projectThumbnail} from "../../components/thumbnail-project";
import {BreadcrumbCategory, breadcrumbs, BreadcrumbsLink} from "../../components/breadcrumbs";
import {interactiveView} from "../../views/interactive.ts";

import * as spaceCompass from "./space-compass";
import * as nextUx from "./next-ux";


const pageReferences: { [key: string]: any } = {
    "space-compass": spaceCompass,
    "next-ux": nextUx,
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

export function buildThumbnailList() {
    const list = document.createElement('ul');

    Object.values(pageReferences).forEach((page: any) => {
        const { thumbnail } = page;
        const item = projectThumbnail(thumbnail, false);
        list.appendChild(item);
    });

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



