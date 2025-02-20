import {writeTitle} from "../utils";
import {buildThumbnailList} from "../../content/projects";


//-----------------------------------------------------------------------

export function interactiveView() {
    const viewWrapper = document.getElementById('view-wrapper')!;
    const article = document.createElement('article');
    const latestProject = document.createElement('div');
    const listProject = document.createElement('div');

    const viewTitle = writeTitle("h1", "interactive");
    const allProjectTitle = writeTitle("h3", "give me more");

    latestProject.className = 'latest-project';
    listProject.className = 'list-project';

    viewWrapper.appendChild(article);
    article.appendChild(viewTitle);
    article.appendChild(latestProject);
    article.appendChild(listProject);
    listProject.appendChild(allProjectTitle);
    listProject.appendChild(buildThumbnailList());
    
    return article;
}


