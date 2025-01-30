import './styles.css';
import {trackBreadcrumbs} from "./breadcrumbs-nav.ts";

import cdIcon from "/img/common/cd_icon_green.png";
import githubIcon from "./assets/github-icon.svg";
import linkedIcon from "./assets/linkedin-icon.svg";
import instagramIcon from "./assets/instagram-icon.svg";

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
    navBox.appendChild(footer());

    return navBox;
}

export function renderNavInfo(infoFn: Function) {
    const wrapper = clearInfo();
    const info = infoFn();

    wrapper?.appendChild(info);
}

//-----------------------------------------------------------------------

function header() {
    const container = document.createElement("div");
    const topTriangle = document.createElement("div");
    const info = document.createElement("div");
    const icon = document.createElement("img");
    const title = document.createElement("h5");

    container.className = "header";
    topTriangle.className = "top-triangle";

    info.className = "info";
    icon.className = "icon";
    icon.src = cdIcon;

    title.textContent = navTitle;

    container.appendChild(topTriangle);
    container.appendChild(info);
    info.appendChild(icon);
    info.appendChild(title);

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