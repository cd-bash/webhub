import {Events} from "./events";
import {router} from "./router.ts";


export const handlers = {
    page_navigation: (value: Events['page_navigation']): void => {
        router.handleRoute(value.pageReference);
    },
};