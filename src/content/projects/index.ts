import {projectView} from "../../views/project-view";
import {projectInfo} from "../../components/vertical-nav/project-nav.ts";
import {renderView} from "../../views/utils";
import {renderNavInfo} from "../../components/vertical-nav";
import {createThumbnail} from "../../components/thumbnail";

import * as nextUx from "./next-ux";
import * as tank from "./tank";
import * as spaceCompass from "./space-compass";


const pageReferences: { [key: string]: any } = {
    "next-ux": nextUx,
    "space-compass": spaceCompass,
    "tank": tank,

};

//-----------------------------------------------------------------------

export function buildProjectPage(pageReference: string) {
    const page = pageReferences[pageReference];
    if (!page) {
        console.error(`Project page reference "${pageReference}" not found.`);
        return;
    }
    const viewContent = projectView(page!.content);
    const navInfo = projectInfo(page!.aboutInfo, page!.relatedLinksInfo);

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



