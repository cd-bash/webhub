import '../styles/vertical-nav.css'
import cdIcon from "/img/common/cd_icon_green.png"
import githubIcon from '../assets/icons/github-icon.svg'
import linkedIcon from '../assets/icons/linkedin-icon.svg'
import instagramIcon from '../assets/icons/instagram-icon.svg'


let menuTitle: string = "CD-BASH";
let footerCopyrights: string = "© 2025 Charles Doucet - All Rights Reserved";


export function VerticalNav() {
    const menuBox = document.createElement("div");
    menuBox.id = "vertical-nav";

    menuBox.innerHTML += navHeader;
    menuBox.innerHTML += navFooter;

    return menuBox;
}

// -------------------------------------------------------------------

const navHeader = `
    <div class="header">
        <div class="top-triangle"></div>
        <div class="info">
            <img class="icon" src="${cdIcon}" class="logo vanilla" alt="CD-Bash logo" />
            <h5>${menuTitle}</h5>
        </div>
    </div>
`

const navFooter = `
    <div class="nav-footer">
        <ul class="socials">
            <li><object data="${githubIcon}" type="image/svg+xml"></object></li>
            <li><svg src="${linkedIcon}"/></li>
            <li><svg src="${instagramIcon}"/></li>
        </ul>
        <p class="copyrights">${footerCopyrights}</p>
    </div>
`