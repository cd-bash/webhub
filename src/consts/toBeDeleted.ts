import '../components/vertical-nav/styles.css'

import {EventBus} from "../event-bus";
import {Events} from "./events";
import {handlers} from "./handlers";

const EVENT_BUS = new EventBus<Events>();
EVENT_BUS.subscribe('button_test', handlers.button_test);

// ----------------------------------------------------------------------

/*function testButtons() {
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
}*/


