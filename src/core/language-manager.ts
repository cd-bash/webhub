type Language = 'en' | 'fr';

type LocalizedContent<T> = {
    en: T;
    fr: T;
};

function getLocalizedContent<T>(content: LocalizedContent<T>): T {
    const currentLang = languageManager.getCurrentLanguage();
    return content[currentLang];
}


class LanguageManager {
    private static instance: LanguageManager;
    private currentLanguage: Language = 'en';

    private constructor() {
        this.currentLanguage = this.getStoredLanguage() || this.getBrowserLanguage() || 'en';
        document.documentElement.lang = this.currentLanguage;
    }

    static getInstance(): LanguageManager {
        if (!LanguageManager.instance) {
            LanguageManager.instance = new LanguageManager();
        }
        return LanguageManager.instance;
    }

    getCurrentLanguage(): Language {
        return this.currentLanguage;
    }

    setLanguage(language: Language): void {
        this.currentLanguage = language;
        localStorage.setItem('language', language);
        document.documentElement.lang = language;
        
        // Notify that language changed
        const { EVENT_BUS } = require('../index');
        EVENT_BUS.emit('language_changed', { language });
    }

    private getStoredLanguage(): Language | null {
        const stored = localStorage.getItem('language');
        return (stored === 'en' || stored === 'fr') ? stored : null;
    }

    private getBrowserLanguage(): Language | null {
        const browserLang = navigator.language.split('-')[0];
        return (browserLang === 'en' || browserLang === 'fr') ? browserLang as Language : null;
    }
}

export const languageManager = LanguageManager.getInstance();


