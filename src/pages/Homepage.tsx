import MovieList from '../components/MovieList';

export default function Homepage() {
  return (
    <div className='flex flex-col justify-center items-center flex-1  w-full bg-black/30'>
      <MovieList />
    </div>
  );
}
