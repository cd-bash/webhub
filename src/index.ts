import './styles/style.css'
import { ProjectPage } from "./content/projects/space-compass";
import { VerticalNav } from "./components/vertical-nav/vertical-nav";

function init() {
    document.querySelector<HTMLBodyElement>('.home-page')!.appendChild(ProjectPage());
    document.querySelector<HTMLBodyElement>('.home-page')!.appendChild(VerticalNav());
}

init();
