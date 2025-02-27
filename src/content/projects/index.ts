import {projectView, renderView} from "../../views";
import {projectInfo} from "../../components/vertical-nav/info-project.ts";
import {renderBreadcrumbs, renderNavInfo} from "../../components/vertical-nav";
import {projectThumbnail} from "../../components/thumbnail-project";
import {BreadcrumbCategory, breadcrumbs, BreadcrumbsLink} from "../../components/breadcrumbs";
import {interactiveView} from "../../views/interactive.ts";

import * as gbjam12 from "./gbjam-12";
import * as spaceCompass from "./space-compass";
import * as nextUx from "./next-ux";
import * as voxcoIdentity from "./voxco-identity";
import * as spaceProgram from "./space-program";
import * as interval from "./interval";
import * as kiriko from "./kiriko";
import * as specter from "./specter";
import * as tank from "./tank";
import * as youAreTwo from "./you-are-two";
import * as typograzoo from "./typograzoo";
import * as literal from "./literal";
import * as swanLake from "./swan-lake";
import * as theFall from "./the-fall";
import * as switcher from "./switcher";


const pageReferences: { [key: string]: any } = {
    "gbjam-12": gbjam12,
    "next-ux": nextUx,
    "space-compass": spaceCompass,
    "voxco-identity": voxcoIdentity,
    "space-program": spaceProgram,
    "interval": interval,
    "kiriko": kiriko,
    "specter": specter,
    "tank": tank,
    "you-are-two": youAreTwo,
    "typograzoo": typograzoo,
    "literal": literal,
    "swan-lake": swanLake,
    "the-fall": theFall,
    "switcher": switcher
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
    const pages = Object.values(pageReferences);


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



