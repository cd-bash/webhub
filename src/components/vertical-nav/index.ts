import './styles.css';
import {trackBreadcrumbs} from "./breadcrumbs-nav.ts";
import {EventBus} from "../../event-bus";
import {Events} from "../../consts/events";
import {handlers} from "../../consts/handlers";

import cdIcon from "/img/common/cd_icon_green.png";
import githubIcon from "./assets/github-icon.svg";
import linkedIcon from "./assets/linkedin-icon.svg";
import instagramIcon from "./assets/instagram-icon.svg";

const EVENT_BUS = new EventBus<Events>();
EVENT_BUS.subscribe('page_navigation', handlers.page_navigation);

const navTitle = "CD-BASH";
const githubProfile: string = "https://github.com/CD-BASH"
const linkedinProfile: string = "https://www.linkedin.com/in/charlesdouc/"
const instagramProfile: string = "https://www.instagram.com/charlesdouc/"
const footerCopyrights: string = "© 2025 Charles Doucet - All Rights Reserved";


type SocialLink = [
    path: string,
    image: string,
]

const FOO_SOCIALS: SocialLink[] = [
    [githubProfile, githubIcon],
    [linkedinProfile, linkedIcon],
    [instagramProfile, instagramIcon]
]


//-----------------------------------------------------------------------

export function buildVerticalNav() {
    const navBox = document.createElement("div");
    const navWrapper = document.createElement("div");

    navBox.id = "vertical-nav";
    navWrapper.id = "nav-wrapper";

    navBox.appendChild(header());
    navBox.appendChild(navWrapper);
    navWrapper.appendChild(trackBreadcrumbs());
    navBox.appendChild(testButtons());
    navBox.appendChild(footer());

    return navBox;
}

export function renderNavInfo(info: HTMLElement) {
    const navWrapper = clearInfo();
    navWrapper?.appendChild(info);
}

//-----------------------------------------------------------------------

function header() {
    const container = document.createElement("div");
    const topTriangle = document.createElement("div");
    const logo = document.createElement("div");
    const icon = document.createElement("img");
    const title = document.createElement("h5");

    container.className = "header";
    topTriangle.className = "top-triangle";

    logo.className = "info";
    icon.className = "icon";
    icon.src = cdIcon;

    title.textContent = navTitle;

    container.appendChild(topTriangle);
    container.appendChild(logo);
    logo.appendChild(icon);
    logo.appendChild(title);

    return container;
}


function footer() {
    const container = document.createElement("div");
    const socials = document.createElement("ul");
    const copyrights = document.createElement("p");

    container.className = "nav-footer";
    socials.className = "socials";
    copyrights.className = "copyrights";
    copyrights.textContent = footerCopyrights;

    container.appendChild(socials);
    container.appendChild(copyrights);

    FOO_SOCIALS.forEach(social => {
        const [path, image] = social;
        const socialLink = document.createElement("li");
        const link = document.createElement("a");
        const icon = document.createElement("img");

        link.href = path;
        link.target = "_blank";
        icon.src = image;

        socials.appendChild(socialLink);
        socialLink.appendChild(link);
        link.appendChild(icon);
    })

    return container;
}


function clearInfo() {
    const cleanInfo = document.getElementById('nav-wrapper');
    cleanInfo?.childNodes.forEach((childNode) => {
        cleanInfo.removeChild(childNode);
    });

    return cleanInfo;
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


    buttonA.addEventListener('click', () => EVENT_BUS.dispatch('page_navigation', {path: "Button A", pageReference: "next-ux"}));
    buttonB.addEventListener('click', () => EVENT_BUS.dispatch('page_navigation', {path: "Button B", pageReference: "space-compass"}));

    buttonContainer.appendChild(buttonA);
    buttonContainer.appendChild(buttonB);

    return buttonContainer;
}