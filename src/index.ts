import '../public/styles/style.css'
import { BuildView } from "./views/home.ts";
import { VerticalNav } from "./views/vertical-nav";

function init() {
    document.querySelector<HTMLBodyElement>('.home-page')!.appendChild(BuildView());
    document.querySelector<HTMLBodyElement>('.home-page')!.appendChild(VerticalNav());
}

init();
