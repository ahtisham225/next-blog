"use client";
import { useState, useEffect } from 'react';
import styles from './Featured.module.css'; // Update with your CSS module path
import prisma from '@/utils/connect';

const Featured = () => {
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [countries, setCountries] = useState([]);
  const [cities, setCities] = useState([]);
  const [countryName, setCountryName] = useState('');
  const [cityName, setCityName] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch countries
        const countriesResponse = await fetch('/api/countries');
        if (!countriesResponse.ok) {
          throw new Error('Failed to fetch countries');
        }
        const countriesData = await countriesResponse.json();
        setCountries(countriesData);
      } catch (error) {
        console.error('Error fetching countries:', error);
      }
    };

    fetchData();
  }, []); // Run once on component mount

  const handleCountryChange = async (e) => {
    const countryId = e.target.value;
    setSelectedCountry(countryId);

    const country = countries.find((c) => c.id === countryId);
    if (country) {
      setCountryName(country.name);
    }

    try {
      // Fetch cities based on the selected country
      const citiesResponse = await fetch(`/api/cities?countryId=${countryId}`);
      if (!citiesResponse.ok) {
        throw new Error('Failed to fetch cities');
      }
      const citiesData = await citiesResponse.json();
      setCities(citiesData);
    } catch (error) {
      console.error('Error fetching cities:', error);
    }
  };

  const handleCityChange = (e) => {
    const cityId = e.target.value;
    setSelectedCity(cityId);

    const city = cities.find((c) => c.id === cityId);
    if (city) {
      setCityName(city.name);
    }
  };

  const handleSearch = () => {
    if (selectedCountry && selectedCity) {
      // Construct the search query with names
      const queryParams = `country=${encodeURIComponent(countryName)}&city=${encodeURIComponent(cityName)}`;
      // Navigate to /search with query parameters using Next.js Link component
      window.location.href = `/search?${queryParams}`;
    } else {
      alert('Please select both country and city before searching.');
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.search}>
        <div className={styles.title}>
          <h4>Find the Best Personal Injury Lawyer!</h4>
        </div>
        <div className={styles.inputContainer}>
          <select
            className={styles.select}
            value={selectedCountry}
            onChange={handleCountryChange}
          >
            <option value="">Select Country</option>
            {countries.map(country => (
              <option key={country.id} value={country.id}>{country.name}</option>
            ))}
          </select>
        </div>
        <div className={styles.inputContainer}>
          <select
            className={styles.select}
            value={selectedCity}
            onChange={handleCityChange}
          >
            <option value="">Select City</option>
            {cities.map(city => (
              <option key={city.id} value={city.id}>{city.name}</option>
            ))}
          </select>
        </div>
        <button type="button" className={styles.submitButton} onClick={handleSearch}>
          Search
        </button>
      </div>
    </div>
  );
};

export default Featured;
