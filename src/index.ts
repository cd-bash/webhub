import './views/home-view/styles.css';
import {TankInfo, TankView} from "./content/projects/tank";
import {buildVerticalNav} from "./components/vertical-nav";
import {buildViewBase} from "./views/utils";


function init() {
    const body = document.getElementsByTagName("body")[0];
    const contentPage = buildViewBase();
    const verticalNav = buildVerticalNav();

    body.appendChild(contentPage);
    contentPage.appendChild(verticalNav);


    TankView();
    TankInfo();
}

init();