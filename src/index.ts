import './views/home-view/styles.css';
import { router } from "./core/router";
import {buildVerticalNav} from "./components/vertical-nav";
import {buildViewBase} from "./views/utils";
import {buildInteractivePage, buildProjectPage} from "./content/projects";
import {BuildView} from "./views/home-view/home-view.ts";



const routes = [
    { path: '/', handler: BuildView },
    { path: '/interactive', handler: buildInteractivePage },
    { path: '/interactive/:id', handler: (params) => buildProjectPage(params?.id) }
];

routes.forEach(route => router.registerRoute(route.path, route.handler));


function init() {
    const body = document.getElementsByTagName("body")[0];
    const contentPage = buildViewBase();
    const verticalNav = buildVerticalNav();

    body.appendChild(contentPage);
    contentPage.appendChild(verticalNav);

    router.handleRoute(window.location.pathname);
}

init();


