import './MoviesList.scss';
import React from 'react';
import { MovieCard } from '../MovieCard';

interface Props {
  movies: Movie[];
  query: string;
}

function getVisibleMovie(movies: Movie[], query: string) {
  const lowerQuery = query.toLowerCase();

  const filteredMovie = movies.filter(movie => (
    movie.title.toLowerCase().includes(lowerQuery)
    || movie.description.toLowerCase().includes(lowerQuery)
  ));

  return filteredMovie;
}

export const MoviesList: React.FC<Props> = ({ movies, query }) => {
  const visibleMovies = getVisibleMovie(movies, query);

  return (
    <div className="movies">
      {visibleMovies.map(movie => (
        <MovieCard key={movie.imdbId} movie={movie} />
      ))}
    </div>
  );
};