import { useNavigate } from 'react-router-dom';
import type { Movie } from '../types/movie';
import { Button } from '@/components/ui/button';

interface MovieDetailsProps {
  movie: Movie;
}

export default function FilteredMovie({ movie }: MovieDetailsProps) {
  const navigate = useNavigate();
  const posterUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : '/placeholder-movie.jpg';

  const backdropUrl = movie.backdrop_path
    ? `https://image.tmdb.org/t/p/original${movie.backdrop_path}`
    : null;

  const releaseYear = movie.release_date
    ? new Date(movie.release_date).getFullYear()
    : 'N/A';

  return (
    <section className='relative min-h-150 overflow-hidden bg-zinc-950 text-white'>
      {/* Backdrop */}
      {backdropUrl && (
        <div
          className='absolute inset-0 bg-cover bg-center'
          style={{
            backgroundImage: `url(${backdropUrl})`,
          }}
        />
      )}

      {/* Dark overlay */}
      <div className='absolute inset-0 bg-black/70' />

      {/* Gradient */}
      <div className='absolute inset-0 bg-linear-to-r from-black via-black/80 to-transparent' />

      {/* Content */}
      <div className='relative mx-auto flex items-center max-w-7xl gap-8 px-6 py-16'>
        {/* Poster */}
        <div className='hidden w-64 shrink-0 overflow-hidden rounded-xl shadow-2xl md:block'>
          <img
            src={posterUrl}
            alt={movie.title}
            className='h-full w-full object-cover'
          />
        </div>

        {/* Details */}
        <div className='max-w-3xl self-center'>
          <p className='mb-2 text-sm font-semibold uppercase tracking-widest text-zinc-400'>
            Movie
          </p>

          <h1 className='text-4xl font-bold md:text-6xl'>{movie.title}</h1>

          {/* Metadata */}
          <div className='mt-5 flex flex-wrap items-center gap-4 text-sm text-zinc-300'>
            <span>{releaseYear}</span>

            <span>•</span>

            <span className='rounded bg-zinc-800 px-2 py-1 uppercase'>
              {movie.original_language}
            </span>

            <span>•</span>

            <span>⭐ {movie.vote_average.toFixed(1)}</span>

            <span>({movie.vote_count.toLocaleString()} votes)</span>
          </div>

          {/* Overview */}
          <p className='mt-8 text-base leading-7 text-zinc-200 md:text-lg'>
            {movie.overview || 'No overview available for this movie.'}
          </p>

          {/* Extra information */}
          <div className='mt-8 grid grid-cols-2 gap-6 sm:grid-cols-3'>
            <div>
              <p className='text-xs uppercase text-zinc-500'>Popularity</p>

              <p className='mt-1 font-semibold'>
                {movie.popularity.toFixed(1)}
              </p>
            </div>

            <div>
              <p className='text-xs uppercase text-zinc-500'>Release Date</p>

              <p className='mt-1 font-semibold'>
                {movie.release_date || 'N/A'}
              </p>
            </div>

            <div>
              <p className='text-xs uppercase text-zinc-500'>Adult</p>

              <p className='mt-1 font-semibold'>{movie.adult ? 'Yes' : 'No'}</p>
            </div>
          </div>
        </div>
        <Button
          onClick={() => navigate('/')}
          variant={'ghost'}
          className={'cursor-pointer'}
        >
          Go Back
        </Button>
      </div>
    </section>
  );
}
