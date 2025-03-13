import {writeTitle} from "./utils";
import {buildThumbnailList, ProjectCategory} from "../content/projects";


//-----------------------------------------------------------------------

export function interactiveView() {
    const article = document.createElement('article');
    const pageTitle = writeTitle("h1", "project collection");
    const latestEntries = projectList("Latest Entries", "latest");
    const prototrash = projectList("Prototrash", "prototrash");
    const archives = projectList("Archives", "archive");

    article.appendChild(pageTitle);
    article.appendChild(latestEntries);
    article.appendChild(prototrash);
    article.appendChild(archives);
    
    return article;
}


function projectList(title: string, reference: ProjectCategory = 'latest') {
    const projectSection = document.createElement('section');
    const sectionTitle = writeTitle("h2", title);

    projectSection.appendChild(sectionTitle);
    projectSection.appendChild(buildThumbnailList(reference));

    return projectSection;
}