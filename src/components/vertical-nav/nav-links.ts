type NavLinkItem = [
    name: string,
    path: string,
    color: string,
    textColor: string,
]

const navLinkItems: NavLinkItem[] = [
    ['Home', '/', '#3BFFC5', 'black'],
    ['Projects', '/projects', '#3B62FF', 'black'],
    ['Logs', '/logs', '#1E1E1E', 'white'],
    ['About', '/about', '#1E1E1E', 'white'],
    ['Contact', '/contact', '#1E1E1E', 'white'],
]

//-----------------------------------------------------------------------

export function navLinks() {
    const nav = document.createElement('nav');
    const ul = document.createElement('ul');

    nav.className = 'nav-links';
    nav.appendChild(ul);

    navLinkItems.forEach(LinkItem => {
        const [name, path, color, textColor] = LinkItem;
        const li = document.createElement('li');
        const link = document.createElement('a');

        link.href = path;
        link.textContent = name;
        link.style.backgroundColor = color;
        link.style.color = textColor;

        ul.appendChild(li);
        li.appendChild(link);
    });

    return nav;
}