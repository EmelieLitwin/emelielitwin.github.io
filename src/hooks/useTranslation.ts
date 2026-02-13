import { useState, useEffect } from 'react';
import { translations, Language } from '../translations/translations';

/**
 * Custom hook for managing translations
 * Listens to language changes and provides translation function
 */
export function useTranslation() {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    // Load saved language preference
    const savedLang = localStorage.getItem('language') as Language | null;
    if (savedLang && (savedLang === 'en' || savedLang === 'sv')) {
      setLanguage(savedLang);
    }

    // Listen for language changes
    const handleLanguageChange = (e: Event) => {
      const customEvent = e as CustomEvent<{ language: Language }>;
      setLanguage(customEvent.detail.language);
    };

    window.addEventListener('languagechange', handleLanguageChange);

    return () => {
      window.removeEventListener('languagechange', handleLanguageChange);
    };
  }, []);

  const t = translations[language];

  return { t, language };
}
