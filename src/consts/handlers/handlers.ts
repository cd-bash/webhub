import {Events} from "../events";

export const handlers = {
    nav_event: (value: Events['nav_event']): void => {
        console.log(`Handling foo_event: ${JSON.stringify(value, null, 2)}`);
    },
};