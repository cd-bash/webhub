import './styles.css';

export type MainButtonOptions = {
    text: string;
    path: string;
    styleType: 'primary' | 'secondary';
};

// --------------------------------------------------------------------------------

export function createMainButton(options: MainButtonOptions) {
    const { text, path, styleType } = options;
    
    const button = document.createElement('a');
    button.className = `main-button ${styleType}`;
    button.innerHTML = text;
    button.href = path;
    button.role = 'button';
    
    return button;
}

