import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import MovieCard from "./pages/MovieCard";
import MovieDetail from "./pages/MovieDetail";

import LanguageFilter from "./components/LanguageFilter";
import CountryFilter from "./components/CountryFilter";
import GenreFilter from "./components/GenreFilter";

import moviesData from "./moviesData";

const App = () => {
  //States used for changing the filter parameters
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("");

  // Functions handling the filter parameters
  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
  };
  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
  };
  const handleGenreChange = (event) => {
    setSelectedGenre(event.target.value);
  };
  const handleClear = () => {
    setSelectedLanguage("");
    setSelectedCountry("");
    setSelectedGenre("");
  };

  const filteredMovies = moviesData.filter(
    (movie) =>
      (!selectedLanguage || movie.movielanguages.includes(selectedLanguage)) &&
      (!selectedCountry || movie.moviecountries.includes(selectedCountry)) &&
      (!selectedGenre || movie.moviegenres.includes(selectedGenre))
  );

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <LanguageFilter
                  selectedLanguage={selectedLanguage}
                  onLanguageChange={handleLanguageChange}
                />
                <CountryFilter
                  selectedCountry={selectedCountry}
                  onCountryChange={handleCountryChange}
                />
                <GenreFilter
                  selectedGenre={selectedGenre}
                  onGenreChange={handleGenreChange}
                />
                <button onClick={handleClear}>Clear</button>
                <div className="movie-list">
                  {filteredMovies.map((movie) => (
                    <MovieCard key={movie.imdbmovieid} movie={movie} />
                  ))}
                </div>
              </div>
            }
          />
          <Route
            path="/movie/:imdbmovieid"
            element={<MovieDetail movies={filteredMovies} />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
