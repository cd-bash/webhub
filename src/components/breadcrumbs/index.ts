import './styles.css';

export enum BreadcrumbCategory {
    HOME = '#3BFFC5',
    INTERACTIVE = '#3B62FF',
    PROJECT = '#1E1E1E',
}

export type BreadcrumbsLink = [
    name: string,
    path: string,
    category: BreadcrumbCategory,
]

//-----------------------------------------------------------------------

export function breadcrumbs(links: BreadcrumbsLink[]) {
    const breadcrumbsContainer = document.createElement('div');
    const breadcrumbs = document.createElement('ul');

    breadcrumbsContainer.className = 'breadcrumbs';
    breadcrumbsContainer.appendChild(breadcrumbs);

    links.forEach(BreadcrumbsLink => {
        const [name, path, category] = BreadcrumbsLink;
        const crumb = document.createElement('li');
        const link = document.createElement('a');
        const separator = document.createElement('span');

        link.href = path;
        link.textContent = name;
        link.style.backgroundColor = category;
        separator.textContent = '/';

        breadcrumbs.appendChild(crumb);
        crumb.appendChild(link);
        crumb.appendChild(separator);
    });

    return breadcrumbsContainer;
}