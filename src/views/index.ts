import "../styles/main.css";

export * from "./home/";
export * from "./projectCollection.ts";
export * from "./project.ts";
export * from "./about/";
export * from "./contact.ts";


// --------------------------------------------------------------------------------

export function buildViewBase() {
    const view = document.createElement('div');
    view.id = 'view';
    return view;
}

export function renderView(newView: HTMLElement) {
    const cleanView = clearView();
    cleanView.appendChild(newView);
}

// --------------------------------------------------------------------------------

function clearView() {
    const view = document.getElementById('view')!;
    while (view.firstChild) {
        view.removeChild(view.firstChild);
    }

    return view;
}
