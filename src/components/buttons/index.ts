import ARROW_ICON from './assets/icon_arrow_down.svg';

export type MainButtonOptions = {
    text: string;
    path: string;
    styleType: 'primary' | 'secondary';
    contrastMode: 'light' | 'dark';
    target?: '_self' | '_blank';
};

// ------------------------------------------------------------------------

export function createArrowButton(nextElement: string) {
    const button = document.createElement('button');
    button.className = 'btn-arrow';
    button.innerHTML = `<img src="${ARROW_ICON}" alt="Scroll Down">`;
    
    // Add click event to scroll to next section
    button.addEventListener('click', () => {
        scrollToNextSection(nextElement);
    });
    
    return button;
}

function scrollToNextSection(scrollTo: string) {
    const targetElement = document.querySelector(scrollTo);
    if (targetElement) {
        targetElement.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    }
}

export function createMainButton(options: MainButtonOptions) {
    const { text, path, styleType, contrastMode } = options;
    
    const button = document.createElement('a');
    button.className = `btn-main ${styleType}-${contrastMode}`;
    button.innerHTML = text;
    button.href = path;
    button.role = 'button';
    button.target = options.target || '_self';
    
    return button;
}