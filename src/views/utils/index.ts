import "./styles.css";

export * from "./text-utils.ts";
export * from "./visual-utils.ts";
export * from "./backgrounds-utils.ts";
export * from "./buttons.ts";


export function scrollTop() {
    window.scrollTo(0, 0);
}

export function createWrapper() {
    const wrapper = document.createElement('div');
    wrapper.id = 'wrapper';
    return wrapper;
}