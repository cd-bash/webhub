import './styles.css'
import cdIcon from "/img/common/cd_icon_green.png"
import githubIcon from './assets/github-icon.svg'
import linkedIcon from './assets/linkedin-icon.svg'
import instagramIcon from './assets/instagram-icon.svg'
import {EventBus} from "../../event-bus";
import {Events} from "../../consts/events";
import {handlers} from "../../consts/handlers";

const menuTitle: string = "CD-BASH";

const githubProfile: string = "https://github.com/CD-BASH"
const linkedinProfile: string = "https://www.linkedin.com/in/charlesdouc/"
const instagramProfile: string = "https://www.instagram.com/charlesdouc/"
const footerCopyrights: string = "© 2025 Charles Doucet - All Rights Reserved";


const EVENT_BUS = new EventBus<Events>();
EVENT_BUS.subscribe('button_test', handlers.button_test);


export function VerticalNav() {
    const menuBox = document.createElement("div");
    menuBox.id = "vertical-nav";

    menuBox.appendChild(navHeaderBlock());
    menuBox.appendChild(testButtons());
    //menuBox.innerHTML += navFooter;

    return menuBox;
}

// ----------------------------------------------------------------------

function navHeaderBlock() {
    const headerContainer = document.createElement("div");
    const topTriangle = document.createElement("div");
    const info = document.createElement("div");
    const icon = document.createElement("img");
    const title = document.createElement("h5");

    headerContainer.className = "header";
    topTriangle.className = "top-triangle";

    info.className = "info";
    icon.className = "icon";
    icon.src = cdIcon;

    title.textContent = menuTitle;

    headerContainer.appendChild(topTriangle);
    headerContainer.appendChild(info);
    info.appendChild(icon);
    info.appendChild(title);

    return headerContainer;
}


function testButtons() {
    const buttonContainer = document.createElement("div");
    const buttonA  = document.createElement("button");
    const buttonB = document.createElement("button");

    buttonContainer.className = "button-container";

    buttonA.id = "button-a";
    buttonA.className = "button";
    buttonA.textContent = "Button A";
    buttonB.id = "button-b";
    buttonB.className = "button";
    buttonB.textContent = "Button B";


    buttonA.addEventListener('click', () => EVENT_BUS.dispatch('button_test', {path: "Button A"}));
    buttonB.addEventListener('click', () => EVENT_BUS.dispatch('button_test', {path: "Button B"}));

    buttonContainer.appendChild(buttonA);
    buttonContainer.appendChild(buttonB);

    return buttonContainer;
}


const navFooter = `
    <div class="nav-footer">
        <ul class="socials">
            <li><a href="${githubProfile}" target="_blank"><img src="${githubIcon}"/></a></li>
            <li><a href="${linkedinProfile}" target="_blank"><img src="${linkedIcon}"/></a></li>
            <li><a href="${instagramProfile}" target="_blank"><img src="${instagramIcon}"/></a></li>
        </ul>
        <p class="copyrights">${footerCopyrights}</p>
    </div>
`



