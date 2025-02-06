import {ProjectContent, projectView} from "../../views/project-view";
import {AboutProject, projectInfo, RelatedLinks} from "../../components/vertical-nav/project-nav.ts";

import {renderView} from "../../views/utils";
import {renderNavInfo} from "../../components/vertical-nav";

//-----------------------------------------------------------------------

export function buildProjectPage(
    content: ProjectContent,
    aboutInfo: AboutProject,
    relatedLinksInfo: RelatedLinks[],
) {
    const viewContent = projectView(content);
    const navInfo = projectInfo(aboutInfo, relatedLinksInfo);

    renderNavInfo(navInfo);
    renderView(viewContent);
}