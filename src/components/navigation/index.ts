import { buildTopNav } from "./top-nav";
import { buildMobileNav } from "./mobile-nav";

export type LinkItem = [
    name: string,
    path: string,
]

const navLinks: LinkItem[] = [
    ['Side Quests', '/projects'],
    ['About', '/about'],
    ['Logs', '/logs'],
    ['Contact', '/contact'],
]

//-----------------------------------------------------------------------

export function buildNavigation() {
    const navBox = document.createElement("div");
    navBox.appendChild(buildTopNav(navLinks));
    navBox.appendChild(buildMobileNav(navLinks));
    return navBox
}

