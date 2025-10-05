import { writeParagraph, writeTitle } from '../utils/';

export type ContactFormOptions = {
    readonly formTitle: string;
    readonly formInstructions: string;
    readonly embedCode: string; 
}

// --------------------------------------------------------------------------------

export function createContactForm(options: ContactFormOptions) {
    const formContainer = document.createElement('div');
    formContainer.className = 'contact-form-container';
    
    const formIntro = document.createElement('div');
    const formTitle = writeTitle("h3", options.formTitle);
    const formInstructions = writeParagraph(options.formInstructions);
    formIntro.className = 'form-intro';
    formIntro.appendChild(formTitle);
    formIntro.appendChild(formInstructions);

    formContainer.appendChild(formIntro);
    formContainer.appendChild(form(options.embedCode));
    
    return formContainer;
}

// --------------------------------------------------------------------------------

function form(embedCode: string) {
    const iframeWrapper = document.createElement('div');
    iframeWrapper.className = 'iframe-wrapper';
    iframeWrapper.innerHTML = embedCode;
    
    const iframe = iframeWrapper.querySelector('iframe');
    if (iframe) {
        iframe.className = 'contact-form';
        iframe.setAttribute('loading', 'lazy');
        iframe.setAttribute('scrolling', 'no');
        
        const currentSrc = iframe.src;
        if (currentSrc && !currentSrc.includes('scrolling=no')) {
            const separator = currentSrc.includes('?') ? '&' : '?';
            iframe.src = `${currentSrc}${separator}scrolling=no&chrome=false`;
        }
    }

    return iframeWrapper;
}