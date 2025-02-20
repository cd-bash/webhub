import {Events} from "./events";
import {routes} from "./routes";

export const handlers = {
    page_navigation: (value: Events['page_navigation']): void => {
        const routeHandler = routes[value.pageReference];
        if (routeHandler) {
            routeHandler();
            history.pushState(null, '', value.pageReference);
        } else {
            console.error(`No route found for ${value.pageReference}`);
        }
    },
};