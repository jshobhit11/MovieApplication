import React from 'react';
import { Link } from 'react-router-dom';
import '../MovieCard.css';

const MovieCard = ({ movie }) => (
  <Link to={`/movie/${movie.imdbmovieid}`} className="movie-card">
    <img src={movie.moviemainphotos[0]} alt={movie.movietitle} className="movie-image" />
    <h3 className="movie-title">{movie.movietitle}</h3>
  </Link>
);

export default MovieCard;
