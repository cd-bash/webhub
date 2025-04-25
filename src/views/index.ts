import "./styles.css";

export * from "./home";
export * from "./projectCollection.ts";
export * from "./project.ts";
export * from "./about.ts";
export * from "./contact.ts";


// --------------------------------------------------------------------------------

export function buildViewBase() {
    const viewBox = document.createElement('div');
    const viewWrapper = document.createElement('div');
    viewBox.id = 'view-box';
    viewWrapper.id = 'view-wrapper';

    viewBox.appendChild(viewWrapper);
    return viewBox;
}

export function renderView(view: HTMLElement) {
    const viewWrapper = clearView();
    viewWrapper.appendChild(view);
}

// --------------------------------------------------------------------------------

function clearView() {
    const cleanViewWrapper = document.getElementById('view-wrapper')!;
    cleanViewWrapper?.childNodes.forEach((childNode) => {
        cleanViewWrapper.removeChild(childNode);
    });

    return cleanViewWrapper;
}
