import React from 'react';
import { languages } from '../data/languages';

const LanguageFilter = ({ selectedLanguage, onLanguageChange }) => {

  return (
  <>
    <label htmlFor="language-select">Language:</label>
    <select id ="language-select" onChange={onLanguageChange} value={selectedLanguage} style={{ margin: '20px', padding: '10px', borderRadius: '5px', border: '1px solid gray' }}>
      {languages.map(lang => (
        <option key={lang} value={lang === 'All' ? '' : lang}>
          {lang}
        </option>
      ))}
    </select>
  </>
  );
};

export default LanguageFilter;
