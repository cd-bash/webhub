import './views/home-view/styles.css';
import { ProjectPage } from "./content/projects/tank";
import { verticalNav } from "./components/vertical-nav";
import {createContentBase, renderContent} from "./views/utils";


function init() {
    const body = document.getElementsByTagName("body")[0];
    const contentPage = createContentBase();

    body.appendChild(contentPage);
    contentPage.appendChild(verticalNav());

    renderContent(ProjectPage);
}

init();