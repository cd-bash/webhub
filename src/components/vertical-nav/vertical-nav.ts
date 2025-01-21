import './styles.css'
import cdIcon from "/img/common/cd_icon_green.png"

import {EventBus} from "../../event-bus";
import {Events} from "../../consts/events";
import {handlers} from "../../consts/handlers";

const EVENT_BUS = new EventBus<Events>();
EVENT_BUS.subscribe('button_test', handlers.button_test);



export function VerticalNav() {
    const menuBox = document.createElement("div");
    menuBox.id = "vertical-nav";

    menuBox.appendChild(navHeader());
    menuBox.appendChild(testButtons());
    menuBox.appendChild(navFooter());

    return menuBox;
}

// ----------------------------------------------------------------------

function navHeader() {
    const headerContainer = document.createElement("div");
    const topTriangle = document.createElement("div");
    const info = document.createElement("div");
    const icon = document.createElement("img");
    const title = document.createElement("h5");

    headerContainer.className = "header";
    topTriangle.className = "top-triangle";

    info.className = "info";
    icon.className = "icon";
    icon.src = cdIcon;

    title.textContent = menuTitle;

    headerContainer.appendChild(topTriangle);
    headerContainer.appendChild(info);
    info.appendChild(icon);
    info.appendChild(title);

    return headerContainer;
}


function testButtons() {
    const buttonContainer = document.createElement("div");
    const buttonA  = document.createElement("button");
    const buttonB = document.createElement("button");

    buttonContainer.className = "button-container";

    buttonA.id = "button-a";
    buttonA.className = "button";
    buttonA.textContent = "Button A";
    buttonB.id = "button-b";
    buttonB.className = "button";
    buttonB.textContent = "Button B";


    buttonA.addEventListener('click', () => EVENT_BUS.dispatch('button_test', {path: "Button A"}));
    buttonB.addEventListener('click', () => EVENT_BUS.dispatch('button_test', {path: "Button B"}));

    buttonContainer.appendChild(buttonA);
    buttonContainer.appendChild(buttonB);

    return buttonContainer;
}


