import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { fetchMovies } from '../lib/utils';
import { useSelector } from 'react-redux';
import FilteredMovie from '../components/FilteredMovie';

export default function MovieDetails() {
  const { search: movieName } = useSelector((state) => state.filters);
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
