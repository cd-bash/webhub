import {Events} from "../events";
import {buildProjectPage} from "../../content/projects";

export const handlers = {
    page_navigation: (value: Events['page_navigation']): void => {
        buildProjectPage(value.pageReference);
    },

    page_navigation_TEST: (value: Events['page_navigation']): void => {
        buildProjectPage(value.pageReference);
    }
};