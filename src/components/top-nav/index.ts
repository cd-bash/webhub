type LinkItem = [
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

export function buildTopNav() {
    const navBox = document.createElement("div");
    const ul = document.createElement("ul");

    navBox.id = "top-nav";

    navLinks.forEach(link => {
        const [name, path] = link;
        const li = document.createElement("li");
        const a = document.createElement("a");

        a.href = path;
        a.textContent = name;

        li.appendChild(a);
        ul.appendChild(li);
    })

    navBox.appendChild(ul);
    return navBox
}