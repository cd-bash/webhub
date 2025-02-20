import {Events} from "./events";
import {matchRoute} from "./routes";


export const handlers = {
    page_navigation: (value: Events['page_navigation']): void => {
        const matchedRoute = matchRoute(value.pageReference);
        if (matchedRoute) {
            matchedRoute.handler(matchedRoute.params);
            history.pushState(null, '', value.pageReference);
        } else {
            console.error(`No route found for ${value.pageReference}`);
        }
    },
};