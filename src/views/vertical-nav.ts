import '../../public/styles/vertical-nav.css';
import cdIcon from "../../public/img/common/cd_icon_green.png";

let menuTitle: string = "CD-BASH";
let footerCopyrights: string = "© 2025 Charles Doucet - All Rights Reserved";


export function VerticalNav() {
    const menuBox = document.createElement("div");
    menuBox.id = "vertical-nav";

    menuBox.appendChild(NavHeader());
    menuBox.appendChild(NavFooter());

    return menuBox;
}

// -------------------------------------------------------------------

function NavHeader() {
    const header = document.createElement("div");
    const topTriangle = document.createElement("div");
    const info = document.createElement("div");
    const icon = document.createElement("img");
    const title = document.createElement("h5");

    header.className = "header";
    topTriangle.className = "top-triangle";
    info.className = "info";
    icon.className = "icon";
    title.className = "title";

    icon.src = cdIcon;
    title.textContent = menuTitle;

    info.appendChild(icon);
    info.appendChild(title);
    header.appendChild(topTriangle);
    header.appendChild(info);

    return header;
}


function NavFooter() {
    const footer = document.createElement("div");
    const copyrights = document.createElement("p");

    footer.className = "nav-footer";
    copyrights.className = "copyrights";

    copyrights.textContent = footerCopyrights

    footer.appendChild(copyrights);

    return footer;
}