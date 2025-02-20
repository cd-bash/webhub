import './views/home-view/styles.css';
import {buildVerticalNav} from "./components/vertical-nav";
import {buildViewBase} from "./views/utils";
import {EVENT_BUS} from "./event-bus";
import {buildProjectPage} from "./content/projects";
import {interactiveView} from "./views/interactive-view";


function init() {
    const body = document.getElementsByTagName("body")[0];
    const contentPage = buildViewBase();
    const verticalNav = buildVerticalNav();

    body.appendChild(contentPage);
    contentPage.appendChild(verticalNav);

    interactiveView();
    //buildProjectPage("next-ux");

    const initialPath = window.location.pathname;
    EVENT_BUS.dispatch('page_navigation', { path: initialPath, pageReference: initialPath });
}

init();


window.addEventListener('popstate', (event) => {
    const path = window.location.pathname;
    EVENT_BUS.dispatch('page_navigation', {path: path, pageReference: path});
});