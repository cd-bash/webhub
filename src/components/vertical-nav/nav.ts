type NavLink = [
    name: string,
    path: string,
    color: string,
]

const navLinks: NavLink[] = [
    ['Home', '/', '#3BFFC5'],
    ['Projects', '/projects', '#3B62FF'],
    ['Blog', '/blog', '#1E1E1E'],
    ['About', '/about', '#FF3B3B'],
    ['Contact', '/contact', '#FF3B3B'],
]

//-----------------------------------------------------------------------

export function nav() {
    const nav = document.createElement('nav');
    const ul = document.createElement('ul');

    nav.className = 'nav-links';
    nav.appendChild(ul);

    navLinks.forEach(NavLink => {
        const [name, path, color] = NavLink;
        const li = document.createElement('li');
        const link = document.createElement('a');

        link.href = path;
        link.textContent = name;
        link.style.backgroundColor = color;

        ul.appendChild(li);
        li.appendChild(link);
    });

    return nav;
}