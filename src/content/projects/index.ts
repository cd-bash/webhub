import {projectView} from "../../views/project-view";
import {projectInfo} from "../../components/vertical-nav/project-nav.ts";
import {renderView} from "../../views/utils";
import {renderNavInfo} from "../../components/vertical-nav";

import * as tank from "./tank";
import * as spaceCompass from "./space-compass";

//-----------------------------------------------------------------------

export function buildProjectPage(pageReference: string) {
    const page = getPageReference(pageReference);
    const viewContent = projectView(page!.content);
    const navInfo = projectInfo(page!.aboutInfo, page!.relatedLinksInfo);

    renderNavInfo(navInfo);
    renderView(viewContent);
}

//-----------------------------------------------------------------------

function getPageReference(ref: string) {
    switch (ref) {
        case "tank":
            return tank;
        case "space-compass":
            return spaceCompass;
    }
}