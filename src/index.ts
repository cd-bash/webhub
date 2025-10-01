import { router } from "./core/router";
import {homeView, aboutView, buildViewBase, renderView, logArticleView, contactView} from "./views";
import {buildNavigation} from "./components/navigation";
import {changeLogoOnScroll} from "./components/navigation/logo";
import { buildFooter } from "./components/footer";


const routes = [
    { path: '', handler: () => renderView(homeView()) },
    { path: '/about', handler: () => renderView(aboutView()) },
    { path: '/logs', handler: () => renderView(logArticleView()) },
    { path: '/contact', handler: () => renderView(contactView()) } 
];

routes.forEach(route => router.registerRoute(route.path, route.handler));

//-----------------------------------------------------------------------

function init() {
    const body = document.getElementsByTagName("body")[0];
    const contentPage = buildViewBase();
    const nav = buildNavigation();
    const footer = buildFooter();

    body.appendChild(nav);
    window.addEventListener('scroll', changeLogoOnScroll);

    body.appendChild(contentPage);
    body.appendChild(footer);

    router.handleRoute(window.location.pathname);
}

init();


