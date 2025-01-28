/*
 VIEW-UTILITIES
 Are functions used to build the skeleton of content pages.
 They are mostly used when building templates.
 */

export function createContentBase() {
    const page = document.createElement('div');
    const wrapper = document.createElement('div');
    page.id = 'content-page';
    wrapper.id = 'wrapper';

    page.appendChild(wrapper);
}

export function renderContent(contentFn: Function) {
    const wrapper = clearWrapper();
    const content = contentFn();

    wrapper?.appendChild(content);
}


function clearWrapper() {
    const cleanWrapper = document.getElementById('wrapper');
    cleanWrapper?.childNodes.forEach((childNode) => {
        cleanWrapper.removeChild(childNode);
    });

    return cleanWrapper;
}

