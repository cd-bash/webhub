import './styles/style.css'
import { BuildView } from "./views/home.ts"
import { VerticalNav } from "./components/vertical-nav"

function init() {
    document.querySelector<HTMLBodyElement>('.home-page')!.appendChild(BuildView());
    document.querySelector<HTMLBodyElement>('.home-page')!.appendChild(VerticalNav());
}

init();
