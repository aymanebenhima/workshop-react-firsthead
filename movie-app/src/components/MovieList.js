import React from 'react';
import MovieCard from './MovieCard';

const MovieList = ({ movies }) => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      {movies.length ? (
        movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)
      ) : (
        <h2>No movies found!</h2>
      )}
    </div>
  );
};

export default MovieList;
