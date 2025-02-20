import {Events} from "./events";
import {buildProjectPage} from "../content/projects";

export const handlers = {
    page_navigation: (value: Events['page_navigation']): void => {
        buildProjectPage(value.pageReference);
        history.pushState(null, '', value.pageReference);
    },
};