import './styles.css';

import cdIcon from "/img/common/cd_icon_green.png";
import githubIcon from "./assets/github-icon.svg";
import linkedIcon from "./assets/linkedin-icon.svg";
import instagramIcon from "./assets/instagram-icon.svg";
import {navLinks} from "./nav-links.ts";

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
    const navHeader = header();
    const navLinksSection = navLinks();
    const navInfo = document.createElement("div");
    const navFooter = footer();

    navBox.id = "vertical-nav";
    navInfo.id = "nav-info";

    navBox.appendChild(navHeader);
    navHeader.appendChild(navLinksSection);
    navBox.appendChild(navInfo);
    navBox.appendChild(navFooter);

    return navBox;
}


export function renderNavInfo(info: HTMLElement) {
    const navInfo = clearInfo();
    navInfo?.appendChild(info);
}

//-----------------------------------------------------------------------

const header = () => {
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


const footer = () => {
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
    const cleanInfo = document.getElementById('nav-info');
    cleanInfo?.childNodes.forEach((childNode) => {
        cleanInfo.removeChild(childNode);
    });

    return cleanInfo;
}