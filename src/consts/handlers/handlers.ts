import {Events} from "../events";
import {buildProjectPage} from "../../content/projects";

export const handlers = {
    button_test: (value: Events['button_test']): void => {
        console.log(value);
    },

    page_navigation: (value: Events['page_navigation']): void => {

        if (value.pageReference == "tank") {
            console.log("indeed this is tank");
        }

        if (value.pageReference == "space-compass") {
            console.log("this one is space compass");
        }

        buildProjectPage(value.pageReference);
    }
};