import React from "react";
import { genres } from "../data/genres";

const GenreFilter = ({selectedGenre, onGenreChange}) => {

    return (
  <>
    <label htmlFor="genre-select">Genre:</label>
    <select id="genre-select" onChange={onGenreChange} value={selectedGenre} style={{ margin: '20px', padding: '10px', borderRadius: '5px', border: '1px solid gray' }}>
      {genres.map(genre => (
        <option key={genre} value={genre === 'All' ? '' : genre}>
          {genre}
        </option>
      ))}
    </select>
  </>
    )

}

export default GenreFilter;