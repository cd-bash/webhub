enum LinkCategory {
    HOME = "#3BFFC5",
    INTERACTIVE = "#3B62FF",
    PROJECT = "#1E1E1E",
}

type BreadcrumbLink = [
    crumbName: string,
    href: string,
    category: LinkCategory
];

const CURRENT_TRACK: BreadcrumbLink[] = [
    ["home", "/", LinkCategory.HOME],
    ["interactive", "/interactive", LinkCategory.INTERACTIVE],
    ["space compass", "/space-compass", LinkCategory.PROJECT],
]

//-----------------------------------------------------------------------

export function trackBreadcrumbs() {
    const breadcrumbsContainer = document.createElement("div");
    const title = document.createElement("h3");
    const breadcrumbs = document.createElement("ul");

    breadcrumbsContainer.className = "breadcrumbs-nav";
    title.textContent = "Track:"

    breadcrumbsContainer.appendChild(title);
    breadcrumbsContainer.appendChild(breadcrumbs);

    CURRENT_TRACK.forEach(BreadcrumbLink => {
        const [crumbName, href, category] = BreadcrumbLink;
        const crumb = document.createElement("li");
        const link = document.createElement("a");
        const separator = document.createElement("span");

        link.href = href;
        link.textContent = crumbName;
        link.style.backgroundColor = category;
        separator.textContent = "/";

        breadcrumbs.appendChild(crumb);
        crumb.appendChild(link);
        crumb.appendChild(separator);
    })

    return breadcrumbsContainer;
}