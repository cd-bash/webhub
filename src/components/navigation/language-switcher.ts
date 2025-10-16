import { languageManager } from "../../core/language-manager";

//-----------------------------------------------------------------------

export function buildLanguageSwitcher() {
    const container = document.createElement('ul');
    container.className = 'language-switcher';

    const enLink = linkBtn('EN');
    const frLink = linkBtn('FR');

    enLink.addEventListener('click', () => {
        languageManager.setLanguage('en');
    });

    frLink.addEventListener('click', () => {
        languageManager.setLanguage('fr');
    });

    container.appendChild(enLink);
    container.appendChild(frLink);
    return container;
}

//-----------------------------------------------------------------------

function linkBtn(text: string) {
    const link = document.createElement('li');
    const anchor = document.createElement('a');
    anchor.href = '#';
    anchor.textContent = text;
    link.appendChild(anchor);
    return link;
}