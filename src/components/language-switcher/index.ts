import { languageManager } from '../../core/i18n/language-manager';

export function createLanguageSwitcher() {
    const container = document.createElement('div');
    container.className = 'language-switcher';

    const enButton = document.createElement('button');
    enButton.className = 'lang-btn';
    enButton.textContent = 'EN';
    
    const frButton = document.createElement('button');
    frButton.className = 'lang-btn';
    frButton.textContent = 'FR';
    
    // Set active state
    updateActiveButton();
    
    enButton.addEventListener('click', () => {
        languageManager.setLanguage('en');
        updateActiveButton();
    });
    
    frButton.addEventListener('click', () => {
        languageManager.setLanguage('fr');
        updateActiveButton();
    });

    container.appendChild(enButton);
    container.appendChild(frButton);

    function updateActiveButton() {
        const isEnglish = languageManager.getCurrentLanguage() === 'en';
        enButton.classList.toggle('active', isEnglish);
        frButton.classList.toggle('active', !isEnglish);
    }

    return container;
}