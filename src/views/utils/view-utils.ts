/*
 VIEW-UTILITIES
 Are functions used to build the skeleton of content pages.
 They are mostly used when building templates.
 */

export function buildViewBase() {
    const viewBox = document.createElement('div');
    const viewWrapper = document.createElement('div');
    viewBox.id = 'view-box';
    viewWrapper.id = 'view-wrapper';

    viewBox.appendChild(viewWrapper);
    return viewBox;
}

export function renderView(viewFn: Function) {
    const viewWrapper = clearView();
    const view = viewFn();

    console.log(typeof view);

    viewWrapper.appendChild(view);
}


function clearView() {
    const cleanViewWrapper = document.getElementById('view-wrapper')!;
    cleanViewWrapper?.childNodes.forEach((childNode) => {
        cleanViewWrapper.removeChild(childNode);
    });

    return cleanViewWrapper;
}

