// src/Components/LanguageSwitcher.js
import React from 'react';
import { useLanguage } from './LanguageContext';
import "./LanguageSwitcher.css";

const LanguageSwitcher = () => {
  const { language, changeLanguage } = useLanguage();

  const handleLanguageChange = (newLanguage) => {
    changeLanguage(newLanguage);
  };

  return (
    <div className="language-switcher">
      <select
        id="language-select"
        value={language}
        onChange={(e) => handleLanguageChange(e.target.value)}
      >
        <option value="en">EN</option>
        <option value="fi">FI</option>
      </select>
    </div>
  );
};

export default LanguageSwitcher;
