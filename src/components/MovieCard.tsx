import type { Movie } from '../types/movie';

interface MovieCardProps {
  movie: Movie;
}

export default function MovieCard({ movie }: MovieCardProps) {
  const posterUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : '/placeholder-movie.jpg';

  const releaseYear = movie.release_date
    ? new Date(movie.release_date).getFullYear()
    : 'N/A';

  return (
    <article className='group overflow-hidden rounded-xl bg-zinc-900'>
      {/* Poster */}
      <div className='relative aspect-2/3 overflow-hidden'>
        <img
          src={posterUrl}
          alt={movie.title}
          className='h-full w-full object-cover transition-transform duration-300 group-hover:scale-105'
        />

        {/* Rating */}
        <div className='absolute right-2 top-2 rounded-md bg-black/80 px-2 py-1 text-sm font-semibold text-white'>
          ⭐ {movie.vote_average.toFixed(1)}
        </div>
      </div>

      {/* Movie information */}
      <div className='p-4'>
        <h2 className='truncate text-lg font-bold text-white'>{movie.title}</h2>

        <p className='mt-1 text-sm text-zinc-400'>{releaseYear}</p>

        <p className='mt-3 line-clamp-3 text-sm leading-6 text-zinc-300'>
          {movie.overview || 'No description available.'}
        </p>
      </div>
    </article>
  );
}
