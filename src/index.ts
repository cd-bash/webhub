import './views/home-view/styles.css';
import {buildVerticalNav} from "./components/vertical-nav";
import {buildViewBase} from "./views/utils";
import {buildProjectPage} from "./content/projects";
import {interactiveView} from "./views/interactive-view";


function init() {
    const body = document.getElementsByTagName("body")[0];
    const contentPage = buildViewBase();
    const verticalNav = buildVerticalNav();

    body.appendChild(contentPage);
    contentPage.appendChild(verticalNav);


    interactiveView();
}

init();