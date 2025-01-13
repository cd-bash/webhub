import './styles/style.css'
import { renderProjectPage } from "./views/project-page.ts"
import { VerticalNav } from "./components/vertical-nav"

function init() {
    document.querySelector<HTMLBodyElement>('.home-page')!.appendChild(renderProjectPage());
    document.querySelector<HTMLBodyElement>('.home-page')!.appendChild(VerticalNav());
}

init();
