import React from 'react';
import { useParams, useNavigate } from 'react-router-dom'; 
import '../MovieDetail.css';

const MovieDetail = ({ movies }) => {
  const { imdbmovieid } = useParams();
  const navigate = useNavigate(); 
  const movie = movies.find((m) => m.imdbmovieid === imdbmovieid);

  if (!movie) {
    return <div>Movie not found.</div>;
  }

  const handleBackClick = () => {
    navigate('/');
  };

  return (
    <div className="movie-detail">
      <button onClick={handleBackClick} style={{
        background: 'url("https://cdn-icons-png.flaticon.com/512/6392/6392143.png") no-repeat center center',
        backgroundSize: 'cover',
        border: 'none',
        width: '50px', 
        height: '50px',
        cursor: 'pointer',
        marginBottom: '20px'
      }}/>
      <img src={movie.moviemainphotos[0]} alt={movie.movietitle} className="movie-image" />
      <h2>{movie.movietitle}</h2>
      <p><strong>Languages:</strong> {movie.movielanguages.join(', ')}</p>
      <p><strong>Genres:</strong> {movie.moviegenres.join(', ')}</p>
      <p><strong>Countries:</strong> {movie.moviecountries.join(', ')}</p>
    </div>
  );
};

export default MovieDetail;
