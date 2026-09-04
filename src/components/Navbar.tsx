import {User} from 'lucide-react'
import {Link} from 'react-router-dom'
import { buttonVariants } from './ui/button';

export default function Navbar() {
  return (
    <div className='flex items-center justify-between p-2 bg-white/30 backdrop-blur-md shadow-md '>
      <section className='flex items-center gap-4'>
        <Link to='/' className={`${buttonVariants()} cursor-pointer`}>
        <h1 className='text-3xl font-extrabold text-transparent bg-clip-text bg-linear-to-br from-blue-600 via-orange-700 to-purple-800 uppercase'>Movie Database</h1>
        </Link>
      </section>
      <section>
        <input placeholder='Enter your search' />
      </section>
      <section>
        <User/>
        </section>
    </div>
  );
}
