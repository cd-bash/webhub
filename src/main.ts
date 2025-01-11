import '../public/styles/style.css'
import { BuildView } from "./views/home.ts";

function init() {
    const body = document.querySelector('body');
    const homePage = BuildView();

    body.appendChild(homePage);
}

init();
