import { router } from "./core/router";
import {homeView, aboutView, buildViewBase, renderView} from "./views";
import {buildNavigation} from "./components/navigation";
import {changeLogoOnScroll} from "./components/navigation/logo";


const routes = [
    { path: '', handler: () => renderView(homeView()) },
    { path: '/about', handler: () => renderView(aboutView()) },
];

routes.forEach(route => router.registerRoute(route.path, route.handler));

//-----------------------------------------------------------------------

function init() {
    const body = document.getElementsByTagName("body")[0];
    const contentPage = buildViewBase();
    const nav = buildNavigation();

    body.appendChild(nav);
    window.addEventListener('scroll', changeLogoOnScroll);

    body.appendChild(contentPage);
    

    router.handleRoute(window.location.pathname);
}

init();


