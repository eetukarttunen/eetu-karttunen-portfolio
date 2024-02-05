// src/LanguageContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const storedLanguage = localStorage.getItem('language');
  const [language, setLanguage] = useState(storedLanguage || 'en');

  function changeLanguage(newLanguage) {
    setLanguage(newLanguage);
  }

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
