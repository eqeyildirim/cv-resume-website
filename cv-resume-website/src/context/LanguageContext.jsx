import { createContext, useContext, useState } from 'react';
import en_data from '../locales/en.json';
import tr_data from '../locales/tr.json';
import useLocalStorage from '../hooks/useLocalStorage';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useLocalStorage('language', 'en');

  const t = (key) => {
   
    const translate = language === 'en' ? en_data : tr_data;
    return translate[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, t, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  return useContext(LanguageContext);
};
