export type AboutProject = {
    readonly release: string;
    readonly platforms: string;
    readonly developer: string;
}

export type RelatedLinks = [
    name: string,
    path: string,
]

//-----------------------------------------------------------------------

export function projectInfo(about: AboutProject, links: RelatedLinks[]) {
    const navWrapper = document.getElementById('nav-wrapper');

    if (about != null && navWrapper != null) {
        navWrapper?.appendChild(sectionAboutTheGame(about));

    }

    if (links != null) {
        navWrapper?.appendChild(sectionRelatedLinks(links));
    }

    return navWrapper;
}

//-----------------------------------------------------------------------

function sectionAboutTheGame(about: AboutProject) {
    const detailSection = document.createElement('div');
    const detailTitle = document.createElement("h4");
    const releaseDate = document.createElement("p");
    const platformAvailable = document.createElement("p");
    const developerNames = document.createElement("p");

    detailSection.className = "detail-section";
    detailTitle.textContent = "About the Project"
    releaseDate.textContent = "<b>Release date: </b>" + about.release;
    platformAvailable.textContent = "<b>Platforms: </b" + about.platforms;
    developerNames.textContent = "<b>Developer: </b>" + about.developer;

    detailSection.appendChild(detailTitle);
    detailSection.appendChild(releaseDate);
    detailSection.appendChild(platformAvailable);
    detailSection.appendChild(developerNames);

    return detailSection;
}


function sectionRelatedLinks(relatedLinks: RelatedLinks[]) {
    const detailSection = document.createElement('div');
    const linkList = document.createElement('ul');

    detailSection.className = "detail-section";
    detailSection.appendChild(linkList);

    relatedLinks.forEach(relatedLink => {
        const [name, path] = relatedLink;
        const linkLine = document.createElement('li');
        const link = document.createElement("a");

        link.href = path;
        link.target = "_blank";
        link.textContent = name;

        linkList.appendChild(linkLine);
        linkLine.appendChild(link);
    })

    return detailSection;
}