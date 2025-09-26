import MENU_ICON from './assets/menu-icon.svg';
import { renderMainLogo } from './logo';
import { LinkItem } from "./";

//-----------------------------------------------------------------------

export function buildMobileNav(links : LinkItem[]) {
    const mobileNav = document.createElement("div");
    mobileNav.id = "mobile-nav";

    const menuButtonElement = menuButton();
    const menuElement = mobileMenu(links);

    mobileNav.appendChild(menuElement);
    mobileNav.appendChild(renderMainLogo());
    mobileNav.appendChild(menuButtonElement);
    
    menuButtonElement.addEventListener('click', () => {
        mobileNav.classList.toggle('menu-open');
    });

    return mobileNav;
}

//-----------------------------------------------------------------------

function menuButton() {
    const menuButton = document.createElement("button");
    menuButton.id = "menu-button";

    const menuImg = document.createElement("img");
    menuImg.src = MENU_ICON;
    menuImg.alt = "Menu Icon";

    menuButton.appendChild(menuImg);
    return menuButton;
}

function mobileMenu(links: LinkItem[]) {
    const menu = document.createElement("ul");
    menu.className = "mobile-menu";

    links.forEach(link => {
        const [name, path] = link;
        const li = document.createElement("li");
        const a = document.createElement("a");

        a.href = path;
        a.textContent = name;

        li.appendChild(a);
        menu.appendChild(li);
    })
    
    return menu;
}
