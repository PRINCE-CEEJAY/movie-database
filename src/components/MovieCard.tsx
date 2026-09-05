import { Link } from 'react-router-dom';
import type { Movie } from '../types/movie';

interface MovieCardProps {
  movie: Movie;
}

export default function MovieCard({ movie }: MovieCardProps) {
  const posterUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : '/placeholder-movie.jpg';

  return (
    <article className='group overflow-hidden rounded-xl bg-zinc-900'>
      {/* Poster */}
      <Link
        to={`/movies/${movie.id}`}
        className='relative aspect-2/3 overflow-hidden cursor-pointer'
      >
        <img
          src={posterUrl}
          alt={movie.title}
          className='h-full w-full object-cover transition-transform duration-300 group-hover:scale-105'
        />

        {/* Rating */}
        <div className='absolute right-2 top-2 rounded-md bg-black/80 px-2 py-1 text-sm font-semibold text-white'>
          ⭐ {movie.vote_average.toFixed(1)}
        </div>
      </Link>
    </article>
  );
}
