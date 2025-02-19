import {renderer} from "./project-data-cube.ts";



export type ButtonLink = [
    label: string,
    highlight: boolean,
]

//-----------------------------------------------------------------------

export function projectInfo(buttons: ButtonLink[]) {
    const container = document.createElement('div');
    const buttonSection = document.createElement('section');

    container.className = "project-info";
    container.appendChild(dataSection());
    container.appendChild(buttonSection);

    buttons.forEach(button => {
        const [label, highlight] = button;
        buttonSection.appendChild(createButton(label, highlight));
    })

    return container;
}

//-----------------------------------------------------------------------


function createButton(label: string, highlight: boolean) {
    const buttonLine = document.createElement('button');

    if (highlight) {
        buttonLine.className = "highlight";
    }

    buttonLine.type = "button";
    buttonLine.textContent = label;

    return buttonLine;
}

function dataSection() {
    const detailSection = document.createElement("section");
    const detailTitle = document.createElement("h4");
    detailTitle.textContent = "Made with";

    detailSection.appendChild(detailTitle);
    detailSection.appendChild(renderer.domElement);

    return detailSection;
}



