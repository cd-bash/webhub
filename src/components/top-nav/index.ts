type NavLinkItem = [
    name: string,
    path: string,
]

const navLinks: NavLinkItem[] = [
    ['Side Quests', '/projects'],
    ['About', '/about'],
    ['Logs', '/logs'],
    ['Contact', '/contact'],
]

export function buildTopNav() {
    const navBox = document.createElement("div");
    const ul = document.createElement("ul");




}