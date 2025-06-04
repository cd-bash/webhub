import './styles.css';

export type cdCoverContent = {
    readonly coverTitle: string;
    readonly coverDescription: string;
    readonly coverImage: string;
}

// --------------------------------------------------------------------------------

export function cdCover() {
    const cdItem = document.createElement('div');
    const cover = document.createElement('div');
    const textBlurb = document.createElement('div');
    const title = document.createElement('p');
    const description = document.createElement('p');

    cdItem.className = 'cd-cover';
    cover.className = 'cover-image';
    textBlurb.className = 'cover-text-blurb';
    title.className = 'cover-title';
    description.className = 'cover-description';

    title.textContent = "test";
    description.textContent = 'This is a test description for the CD cover.';

    textBlurb.appendChild(title);
    textBlurb.appendChild(description);
    cdItem.appendChild(cover);
    cdItem.appendChild(textBlurb);

    return cdItem;
}