export type ClickableImageOptions = {
    src: string;
    alt: string;
    caption?: string;
    hoverText?: string;
};

//-----------------------------------------------------------------------

export function createClickableImage(options: ClickableImageOptions) {
    const {
        src,
        alt,
        hoverText = 'Click to open in full size'
    } = options;

    const container = document.createElement('div');
    const imgWrapper = document.createElement('div');
    container.className = 'clickable-image';
    imgWrapper.className = 'image-wrapper clickable-wrapper';

    const img = document.createElement('img');
    img.src = src;
    img.alt = alt;
    img.style.cursor = 'pointer';
    img.classList.add('clickable');
    
    img.addEventListener('click', () => {
        window.open(src, '_blank', 'noopener,noreferrer');
    });

    imgWrapper.appendChild(hoverCaption(hoverText));
    imgWrapper.appendChild(img);
    container.appendChild(imgWrapper);

    return container;
}

//-----------------------------------------------------------------------

function hoverCaption(caption: string) {
    const conatiner = document.createElement('div');
    conatiner.className = 'hover-caption';
    conatiner.textContent = caption;

    return conatiner;
}