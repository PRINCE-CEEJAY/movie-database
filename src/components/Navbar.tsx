import { User, Film } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useDebouncedSearch } from '../hooks/useDebouncedSearch';
import { useEffect, useState } from 'react';
import { setSearch } from '../features/filters/filterSlice';
import { Spinner } from '@/components/ui/spinner';
import { useIsFetching } from '@tanstack/react-query';
import { useAppDispatch } from '../hooks/ReduxCustomHooks';

export default function Navbar() {
  const [searchInput, setSearchInput] = useState('');
  const isFetching =
    useIsFetching({
      queryKey: ['movie'],
    }) > 0;
  const debouncedSearch = useDebouncedSearch(searchInput);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!debouncedSearch) return;
    dispatch(setSearch(debouncedSearch));
  }, [debouncedSearch]);

  return (
    <div className='flex items-center justify-between p-2 bg-black/70 backdrop-blur-md shadow-md '>
      <section className='flex items-center gap-4'>
        <Link
          to='/'
          className={`flex items-center gap-2 cursor-pointer`}
        >
          <Film />
          <h1 className='text-3xl font-extrabold text-transparent bg-clip-text bg-linear-to-br from-blue-600 via-orange-700 to-purple-800 uppercase hidden md:flex'>
            Movie Database
          </h1>
        </Link>
      </section>
      <section className='flex items-center gap-4'>
        <input
          placeholder='Enter your search'
          className='w-full'
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        {isFetching && <Spinner className='h-6 w-6' />}
      </section>
      <section>
        <User />
      </section>
    </div>
  );
}
