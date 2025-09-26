import { LinkItem } from "./";
import { renderMainLogo } from "./logo";

//-----------------------------------------------------------------------

export function buildTopNav(links: LinkItem[]) {
    const topNav = document.createElement("div");
    const barBox = document.createElement("div");
    const ul = document.createElement("ul");

    topNav.id = "top-nav";
    barBox.className = "bar-box";

    links.forEach(link => {
        const [name, path] = link;
        const li = document.createElement("li");
        const a = document.createElement("a");

        a.href = path;
        a.textContent = name;

        li.appendChild(a);
        ul.appendChild(li);
    })

    barBox.appendChild(ul);
    topNav.appendChild(renderMainLogo());
    topNav.appendChild(barBox);
    return topNav
}

