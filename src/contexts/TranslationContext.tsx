import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { translations, Language } from '../translations/translations';

interface TranslationContextType {
  t: typeof translations.en | typeof translations.sv;
  language: Language;
  setLanguage: (lang: Language) => void;
}

const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

export function TranslationProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    const savedLang = localStorage.getItem('language') as Language | null;
    if (savedLang && (savedLang === 'en' || savedLang === 'sv')) {
      setLanguage(savedLang);
      document.documentElement.lang = savedLang;
    }

    const handleLanguageChange = (e: Event) => {
      const customEvent = e as CustomEvent<{ language: Language }>;
      setLanguage(customEvent.detail.language);
      document.documentElement.lang = customEvent.detail.language;
    };

    window.addEventListener('languagechange', handleLanguageChange);

    return () => {
      window.removeEventListener('languagechange', handleLanguageChange);
    };
  }, []);

  const value = {
    t: translations[language],
    language,
    setLanguage
  };

  return (
    <TranslationContext.Provider value={value}>
      {children}
    </TranslationContext.Provider>
  );
}

export function useTranslation() {
  const context = useContext(TranslationContext);
  if (!context) {
    throw new Error('useTranslation must be used within TranslationProvider');
  }
  return context;
}
