import ARROW_ICON from './assets/icon_arrow_down.svg';

export function arrowButton() {
    const button = document.createElement('button');
    button.className = 'arrow-button';
    button.innerHTML = `<img src="${ARROW_ICON}" alt="Scroll Down">`;
    
    return button;
}