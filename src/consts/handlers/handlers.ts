import {Events} from "../events";

export const handlers = {
    button_test: (value: Events['button_test']): void => {
        console.log(value);
    },

    breadcrumb_button: (value: Events['breadcrumb_button']): void => {
        console.log(value.projectName);

        if (value.projectName == "TANK") {
            console.log("indeed this is tank");
        }


        if (value.projectName == "Space Compass") {
            console.log("this one is space compass");
        }
    }
};