import {threeDataViewer} from "./../three-data-viewer";


export type ButtonLink = [
    label: string,
    path: string,
    highlight: boolean,
]

//-----------------------------------------------------------------------

export function projectInfo(buttons: ButtonLink[]) {
    const container = document.createElement('div');
    const buttonList = document.createElement('ul');

    container.className = "project-info";
    buttonList.className = "button-list";
    container.appendChild(dataSection());
    container.appendChild(buttonList);

    buttons.forEach(button => {
        buttonList.appendChild(createButton(button));
    })

    return container;
}

//-----------------------------------------------------------------------


function createButton(newButton: ButtonLink) {
    const btn = document.createElement('li');
    const btnLine = document.createElement('a');
    const [label, path, highlight] = newButton;

    if (highlight) {
        btn.className = "btn-highlight";
    }

    btnLine.type = "button";
    btnLine.textContent = label;
    btnLine.href = path;
    btnLine.target = "_blank";

    btn.appendChild(btnLine);
    return btn;
}

function dataSection() {
    const detailSection = document.createElement("section");
    const detailTitle = document.createElement("h4");
    detailTitle.textContent = "Made with";

    detailSection.appendChild(detailTitle);
    detailSection.appendChild(threeDataViewer());

    return detailSection;
}



