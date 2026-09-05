import { useDispatch, useSelector } from 'react-redux';
import MovieCard from './MovieCard';
import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import { setSearch } from '../features/filters/filterSlice';
import { fetchMovies } from '../lib/utils';

export default function MovieList() {
  const { search: movieName } = useSelector((state) => state.filters);
  const {
    data: movies,
    error,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['movie', movieName],
    queryFn: () => fetchMovies(movieName),
  });
  const dispatch = useDispatch();

  // initial data load
  useEffect(() => {
    dispatch(setSearch('batman'));
  }, []);

  console.log(`Movie searched for: ${movieName}`);

  if (isLoading) {
    return (
      <h1 className='text-xl font-bold text-center animate-pulse'>
        Loading ...
      </h1>
    );
  }

  if (isError) {
    return (
      <h1 className='text-xl font-bold tex-red-500 text-center'>
        {error.message}
      </h1>
    );
  }

  return (
    <div className='grid grid-cols-2 gap-6 md:grid-cols-4 lg:grid-cols-6 p-2'>
      {movies &&
        movies.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
          />
        ))}
    </div>
  );
}
