import './views/home-view/styles.css';
import { ProjectPage } from "./content/projects/tank";
import { VerticalNav } from "./components/vertical-nav";
import {createContentBase, renderContent} from "./views/utils";


function init() {
    createContentBase();

    const contentPage = document.getElementById('content-page')
    const verticalNav = VerticalNav();

    contentPage?.appendChild(verticalNav);

    renderContent(ProjectPage);
}

init();