import {projectView} from "../../views/project-view";
import {projectInfo} from "../../components/vertical-nav/info-project.ts";
import {renderView} from "../../views/utils";
import {renderBreadcrumbs, renderNavInfo} from "../../components/vertical-nav";
import {createThumbnail} from "../../components/thumbnail";
import {BreadcrumbCategory, breadcrumbs, BreadcrumbsLink} from "../../components/breadcrumbs";

import * as spaceCompass from "./space-compass";



const pageReferences: { [key: string]: any } = {
    "space-compass": spaceCompass,
};




//-----------------------------------------------------------------------

export function buildProjectPage(pageReference: string) {
    const page = pageReferences[pageReference];
    if (!page) {
        console.error(`Project page reference "${pageReference}" not found.`);
        return;
    }
    const viewContent = projectView(page!.content);
    const navInfo = projectInfo(page!.buttons);

    renderBreadcrumbs(breadcrumbs(trackBreadcrumbs(page!.content.title)));
    renderNavInfo(navInfo);
    renderView(viewContent);
}

export function buildThumbnailList() {
    const list = document.createElement('ul');

    Object.values(pageReferences).forEach((page: any) => {
        const item = createThumbnail(page.thumbnail, false);
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



