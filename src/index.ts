import { router } from "./core/router";
import {homeView, buildViewBase, renderView} from "./views";


const routes = [
    { path: '', handler: () => renderView(homeView()) },
];

routes.forEach(route => router.registerRoute(route.path, route.handler));

//-----------------------------------------------------------------------

function init() {
    const body = document.getElementsByTagName("body")[0];
    const contentPage = buildViewBase();

    body.appendChild(contentPage);

    router.handleRoute(window.location.pathname);
}

init();


