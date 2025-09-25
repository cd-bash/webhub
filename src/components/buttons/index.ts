import ARROW_ICON from './assets/icon_arrow_down.svg';

export type MainButtonOptions = {
    text: string;
    path: string;
    styleType: 'primary' | 'secondary';
    contrastMode: 'light' | 'dark';
};

// ------------------------------------------------------------------------

export function createArrowButton() {
    const button = document.createElement('button');
    button.className = 'btn-arrow';
    button.innerHTML = `<img src="${ARROW_ICON}" alt="Scroll Down">`;
    
    return button;
}

export function createMainButton(options: MainButtonOptions) {
    const { text, path, styleType, contrastMode } = options;
    
    const button = document.createElement('a');
    button.className = `btn-main ${styleType}-${contrastMode}`;
    button.innerHTML = text;
    button.href = path;
    button.role = 'button';
    
    return button;
}