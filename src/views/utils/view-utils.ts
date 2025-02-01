/*
 VIEW-UTILITIESed to
 Are functions usbuild the skeleton of content pages.
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

export function renderView(view: HTMLElement) {
    const viewWrapper = clearView();
    viewWrapper.appendChild(view);
}


function clearView() {
    const cleanViewWrapper = document.getElementById('view-wrapper')!;
    cleanViewWrapper?.childNodes.forEach((childNode) => {
        cleanViewWrapper.removeChild(childNode);
    });

    return cleanViewWrapper;
}

