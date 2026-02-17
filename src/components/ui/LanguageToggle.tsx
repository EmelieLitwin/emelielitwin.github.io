import { useState, useEffect } from 'react';
import './LanguageToggle.css';

/**
 * LanguageToggle Component
 * 
 * A toggle button for switching between English and Swedish.
 * Stores language preference in localStorage.
 * 
 * Accessibility:
 * - Semantic button with clear aria-label
 * - Keyboard accessible
 * - Visual indicators for current language
 */
export default function LanguageToggle() {
  const [language, setLanguage] = useState<'en' | 'sv'>('en');

  useEffect(() => {
    const savedLang = localStorage.getItem('language') as 'en' | 'sv' | null;
    if (savedLang) {
      setLanguage(savedLang);
      document.documentElement.lang = savedLang;
    }
  }, []);

  const toggleLanguage = () => {
    const newLang = language === 'en' ? 'sv' : 'en';
    setLanguage(newLang);
    localStorage.setItem('language', newLang);
    document.documentElement.lang = newLang;
    
    window.dispatchEvent(new CustomEvent('languagechange', { detail: { language: newLang } }));
  };

  return (
    <button
      className="language-toggle"
      onClick={toggleLanguage}
      aria-label={language === 'en' ? 'Switch to Swedish' : 'Byt till engelska'}
      title={language === 'en' ? 'Switch to Swedish' : 'Byt till engelska'}
    >
      {language === 'en' ? 'SV' : 'EN'}
    </button>
  );
}
