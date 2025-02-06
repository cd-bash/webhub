import './views/home-view/styles.css';
import {content, aboutInfo, relatedLinksInfo} from "./content/projects/tank";
import {buildVerticalNav} from "./components/vertical-nav";
import {buildViewBase} from "./views/utils";
import {buildProjectPage} from "./content/projects";


function init() {
    const body = document.getElementsByTagName("body")[0];
    const contentPage = buildViewBase();
    const verticalNav = buildVerticalNav();

    body.appendChild(contentPage);
    contentPage.appendChild(verticalNav);


    buildProjectPage(content,aboutInfo,relatedLinksInfo);
}

init();