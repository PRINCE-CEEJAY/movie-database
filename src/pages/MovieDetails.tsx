import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { fetchMovies } from '../lib/utils';
import FilteredMovie from '../components/FilteredMovie';
import { useAppSelector } from '../hooks/ReduxCustomHooks';

export default function MovieDetails() {
  const { search: movieName } = useAppSelector((state) => state.filters);
  const { movieId } = useParams();

  const { data: movies } = useQuery({
    queryKey: ['movie', movieName],
    queryFn: () => fetchMovies(movieName),
  });

  const filters = movies?.filter((movie) => movie.id === Number(movieId));

  return (
    <>
      {filters?.map((item) => (
        <FilteredMovie
          key={item.id}
          movie={item}
        />
      ))}
    </>
  );
}
