import './views/home-view/styles.css';
import {buildVerticalNav} from "./components/vertical-nav";
import {buildViewBase} from "./views/utils";
import {EVENT_BUS} from "./event-bus";


function init() {
    const body = document.getElementsByTagName("body")[0];
    const contentPage = buildViewBase();
    const verticalNav = buildVerticalNav();

    body.appendChild(contentPage);
    contentPage.appendChild(verticalNav);

    // Handle initial page load
    const initialPath = window.location.pathname;
    EVENT_BUS.dispatch('page_navigation', { pageReference: "interactive" });
}

init();


window.addEventListener('popstate', () => {
    const path = window.location.pathname;
    EVENT_BUS.dispatch('page_navigation', { pageReference: path });
});