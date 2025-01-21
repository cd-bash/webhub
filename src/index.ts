import './views/home-view/styles.css'
import { ProjectPage } from "./content/projects/tank";
import { VerticalNav } from "./components/vertical-nav";

const nav = VerticalNav();

function init() {
    document.querySelector<HTMLBodyElement>('.home-page')!.appendChild(ProjectPage());
    document.querySelector<HTMLBodyElement>('.home-page')!.appendChild(nav);

}

init();