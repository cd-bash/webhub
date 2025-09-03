import ARROW_ICON from './assets/icon_arrow_down.svg';

export type MainButtonOptions = {
    text: string;
    path: string;
    styleType: 'primary' | 'secondary';
    contrastMode: 'light' | 'dark';
};

// ------------------------------------------------------------------------

export function arrowButton() {
    const button = document.createElement('button');
    button.className = 'arrow-button';
    button.innerHTML = `<img src="${ARROW_ICON}" alt="Scroll Down">`;
    
    return button;
}

export function createMainButton(options: MainButtonOptions) {
    const { text, path, styleType, contrastMode } = options;
    
    const button = document.createElement('a');
    button.className = `main-button ${styleType} ${contrastMode}`;
    button.innerHTML = text;
    button.href = path;
    button.role = 'button';
    
    return button;
}