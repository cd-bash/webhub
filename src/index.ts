import {buildMainLogo, changeLogoOnScroll} from "./components/logo";
import { router } from "./core/router";
import {homeView, aboutView, buildViewBase, renderView} from "./views";
import {buildTopNav} from "./components/top-nav";


const routes = [
    { path: '', handler: () => renderView(homeView()) },
    { path: '/about', handler: () => renderView(aboutView()) },
];

routes.forEach(route => router.registerRoute(route.path, route.handler));

//-----------------------------------------------------------------------

function init() {
    const body = document.getElementsByTagName("body")[0];
    const contentPage = buildViewBase();
    const mainLogo = buildMainLogo();
    const nav = buildTopNav();

    body.appendChild(mainLogo);
    body.appendChild(nav);
    window.addEventListener('scroll', changeLogoOnScroll);

    body.appendChild(contentPage);
    

    router.handleRoute(window.location.pathname);
}

init();


