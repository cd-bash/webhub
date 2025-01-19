import './styles.css'
import cdIcon from "/img/common/cd_icon_green.png"
import githubIcon from './assets/github-icon.svg'
import linkedIcon from './assets/linkedin-icon.svg'
import instagramIcon from './assets/instagram-icon.svg'


const menuTitle: string = "CD-BASH";

const githubProfile: string = "https://github.com/CD-BASH"
const linkedinProfile: string = "https://www.linkedin.com/in/charlesdouc/"
const instagramProfile: string = "https://www.instagram.com/charlesdouc/"
const footerCopyrights: string = "© 2025 Charles Doucet - All Rights Reserved";


export function VerticalNav() {
    const menuBox = document.createElement("div");
    menuBox.id = "vertical-nav";

    menuBox.innerHTML += navHeader;
    menuBox.appendChild(testButtons());
    menuBox.innerHTML += navFooter;

    return menuBox;
}

// ----------------------------------------------------------------------

const navHeader = `
    <div class="header">
        <div class="top-triangle"></div>
        <div class="info">
            <img class="icon" src="${cdIcon}" class="logo vanilla" alt="CD-Bash logo" />
            <h5>${menuTitle}</h5>
        </div>
    </div>
`

function testButtons() {
    const buttonContainer = document.createElement("div");
    buttonContainer.className = "button-container";

    const buttonA  = document.createElement("button");
    const buttonB = document.createElement("button");

    buttonA.className = "button";
    buttonA.textContent = "Button A";
    buttonB.className = "button";
    buttonB.textContent = "Button B";

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