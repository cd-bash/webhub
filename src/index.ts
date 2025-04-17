import { router } from "./core/router";
import {buildVerticalNav} from "./components/vertical-nav";
import {buildProjectPage} from "./content/projects";
import {homeView, aboutView, buildViewBase, projectCollectionView, renderView} from "./views";


const routes = [
    { path: '', handler: () => renderView(homeView()) },
    { path: '/projects', handler: () => renderView(projectCollectionView()) },
    { path: '/projects/:id', handler: (params) => buildProjectPage(params?.id) },
    { path: '/about', handler: () => renderView(aboutView()) },
];

routes.forEach(route => router.registerRoute(route.path, route.handler));

//-----------------------------------------------------------------------

function init() {
    const body = document.getElementsByTagName("body")[0];
    const contentPage = buildViewBase();
    const verticalNav = buildVerticalNav();

    body.appendChild(contentPage);
    contentPage.appendChild(verticalNav);

    router.handleRoute(window.location.pathname);
}

init();


