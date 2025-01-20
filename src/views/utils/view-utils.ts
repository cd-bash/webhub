/*
 VIEW-UTILITIES
 Are functions used to build the skeleton of content pages.
 They are mostly used when building templates.
 */

export function createContentPage() {
    const page = document.createElement('div');
    const wrapper = document.createElement('div');
    page.id = 'content-page';
    wrapper.id = 'wrapper';

    page.appendChild(wrapper);
    return [page, wrapper];
}
