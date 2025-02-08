import {projectView} from "../../views/project-view";
import {projectInfo} from "../../components/vertical-nav/project-nav.ts";
import {renderView} from "../../views/utils";
import {renderNavInfo} from "../../components/vertical-nav";

import * as nextUx from "./next-ux";
import * as tank from "./tank";
import * as spaceCompass from "./space-compass";

const pageReferences: { [key: string]: any } = {
    "next-ux": nextUx,
    "tank": tank,
    "space-compass": spaceCompass
};

//-----------------------------------------------------------------------

export function buildProjectPage(pageReference: string) {
    const page = getPageReference(pageReference);
    if (!page) {
        console.error(`Project page reference "${pageReference}" not found.`);
        return;
    }
    const viewContent = projectView(page!.content);
    const navInfo = projectInfo(page!.aboutInfo, page!.relatedLinksInfo);

    renderNavInfo(navInfo);
    renderView(viewContent);
}

//-----------------------------------------------------------------------

function getPageReference(ref: string) {
    return pageReferences[ref];
}