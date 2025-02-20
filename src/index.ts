import { router } from "./core/router";
import {buildVerticalNav} from "./components/vertical-nav";
import {buildInteractivePage, buildProjectPage} from "./content/projects";
import {homeView} from "./views/home.ts";
import {buildViewBase} from "./views";


const routes = [
    { path: '/', handler: homeView },
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


