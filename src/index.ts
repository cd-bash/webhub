import './views/home-view/styles.css';
import { router } from "./core/router";
import {buildVerticalNav} from "./components/vertical-nav";
import {buildViewBase} from "./views/utils";
import {interactiveView} from "./views/interactive-view";
import {buildProjectPage} from "./content/projects";
import {BuildView} from "./views/home-view/home-view.ts";



router.registerRoute('/', () => {
    BuildView();
});

router.registerRoute('/interactive', () => {
    interactiveView();
});


router.registerRoute('/interactive/:id', (params) => {
    buildProjectPage(params?.id);
});




function init() {
    const body = document.getElementsByTagName("body")[0];
    const contentPage = buildViewBase();
    const verticalNav = buildVerticalNav();

    body.appendChild(contentPage);
    contentPage.appendChild(verticalNav);

    router.handleRoute(window.location.pathname);
}

init();


