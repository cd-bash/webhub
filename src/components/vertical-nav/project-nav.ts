import {renderer} from "./project-data-cube.ts";

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
    const section = document.createElement('section');

    navWrapper?.appendChild(section);

    section.appendChild(sectionData());

    if (typeof about === "object" && typeof links === "object") {
        section.appendChild(sectionAboutTheGame(about));
        section.appendChild(sectionRelatedLinks(links));
    }
    else {
        throw new Error("Infos are not well formatted")
    }

    return section;
}

//-----------------------------------------------------------------------

function sectionData() {
    const detailSection = document.createElement("div");
    const detailTitle = document.createElement("h4");

    detailSection.className = "detail-section";
    detailTitle.textContent = "Tech Distribution";

    detailSection.appendChild(detailTitle);
    detailSection.appendChild(renderer.domElement);

    return detailSection;
}

function sectionAboutTheGame(about: AboutProject) {
    const detailSection = document.createElement('div');
    const detailTitle = document.createElement("h4");
    const releaseDate = document.createElement("p");
    const platformAvailable = document.createElement("p");
    const developerNames = document.createElement("p");

    detailSection.className = "detail-section";
    detailTitle.textContent = "About the Project"
    releaseDate.innerHTML = "<b>Release date: </b>" + about.release;
    platformAvailable.innerHTML = "<b>Platforms: </b>" + about.platforms;
    developerNames.innerHTML = "<b>Developer: </b>" + about.developer;

    detailSection.appendChild(detailTitle);
    detailSection.appendChild(releaseDate);
    detailSection.appendChild(platformAvailable);
    detailSection.appendChild(developerNames);

    return detailSection;
}


function sectionRelatedLinks(relatedLinks: RelatedLinks[]) {
    const detailSection = document.createElement('div');
    const detailTitle = document.createElement("h4");
    const linkList = document.createElement('ul');

    detailSection.className = "detail-section";
    detailTitle.textContent = "Related Links";

    detailSection.appendChild(detailTitle);
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