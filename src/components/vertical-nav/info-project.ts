import {renderer} from "./project-data-cube.ts";

export type OutsideLink = [
    name: string,
    path: string,
]

export type LinkCollection = [
    title: string,
    links: OutsideLink[],
]

export type LinkButton = [
    label: string,
]

//-----------------------------------------------------------------------

export function projectInfo(collections: LinkCollection[], buttons: LinkButton[]) {
    const container = document.createElement('div');
    container.className = "project-info";
    container.appendChild(dataSection());

    collections.forEach(collection => {
        const [title, links] = collection;
        container.appendChild(linkSection(title, links));
    })

    buttons.forEach(button => {
        const [label] = button;
        container.appendChild(buttonSection(label));
    })

    return container;
}

//-----------------------------------------------------------------------

function linkSection(title: string, links: OutsideLink[]) {
    const section = document.createElement('section');
    const sectionTitle = document.createElement("h4");
    const linkList = document.createElement('ul');

    sectionTitle.textContent = title;

    section.appendChild(sectionTitle);
    section.appendChild(linkList);

    links.forEach(link => {
        const [name, path] = link;
        const linkLine = document.createElement('li');
        const linkElement = document.createElement("a");

        linkElement.href = path;
        linkElement.target = "_blank";
        linkElement.textContent = name;

        linkList.appendChild(linkLine);
        linkLine.appendChild(linkElement);
    })

    return section;
}

function buttonSection(label: string) {
    const section = document.createElement('section');
    const buttonLine = document.createElement('button');

    buttonLine.type = "button";
    buttonLine.textContent = label;

    section.appendChild(buttonLine);

    return section;
}

function dataSection() {
    const detailSection = document.createElement("section");
    const detailTitle = document.createElement("h4");
    detailTitle.textContent = "Tech Distribution";

    detailSection.appendChild(detailTitle);
    detailSection.appendChild(renderer.domElement);

    return detailSection;
}



