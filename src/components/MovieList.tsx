import { useDispatch, useSelector } from 'react-redux';
import MovieCard from './MovieCard';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { type Movie } from '../types/movie';
import { useEffect } from 'react';
import { setSearch } from '../features/filters/filterSlice';

const BASE_URL = import.meta.env.VITE_API_BASE_URL;
const ACCESS_TOKEN = import.meta.env.VITE_API_ACCESS_TOKEN;

export default function MovieList() {
  const { search: movieName } = useSelector((state) => state.filters);
  const {
    data: movies,
    error,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['movie', movieName],
    queryFn: fetchMovies,
  });
  const dispatch = useDispatch();

  async function fetchMovies() {
    const MOVIE_URL = `${BASE_URL}/search/movie?query=${movieName}`;
    try {
      const res = await axios.get(MOVIE_URL, {
        headers: { Authorization: `Bearer ${ACCESS_TOKEN}` },
      });
      const data: Movie[] = res.data.results;
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  // initial data load
  useEffect(() => {
    dispatch(setSearch('batman'));
  }, []);

  console.log(`Movie searched for: ${movieName}`);
  if (isLoading)
    return (
      <h1 className='text-xl font-bold text-center animate-pulse'>
        Loading ...
      </h1>
    );

  if (isError)
    return (
      <h1 className='text-xl font-bold tex-red-500 text-center'>
        {error.message}
      </h1>
    );

  return (
    <div className='grid grid-cols-2 gap-6 md:grid-cols-4 lg:grid-cols-6'>
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
