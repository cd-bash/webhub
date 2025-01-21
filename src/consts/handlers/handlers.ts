import {Events} from "../events";

export const handlers = {
    button_test: (value: Events['button_test']): void => {
        console.log(value);
    },
};