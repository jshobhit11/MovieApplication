import React from 'react';
import {countries} from '../data/countries'

const CountryFilter = ({ selectedCountry, onCountryChange }) => {
    

  return (
    <>
    <label htmlFor="country-select">Country:</label>
    <select id="country-select" onChange={onCountryChange} value={selectedCountry} style={{ margin: '20px', padding: '10px', borderRadius: '5px', border: '1px solid gray' }}>
      {countries.map(country => (
        <option key={country} value={country === 'All' ? '' : country}>
          {country}
        </option>
      ))}
    </select>
    </>
  );
};

export default CountryFilter;
