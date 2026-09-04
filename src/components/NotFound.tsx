import { useNavigate } from 'react-router-dom';

import { Button } from './ui/button';
export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className='flex flex-col justify-center items-center flex-1'>
      <h1 className='text-lg font-bold animate-bounce'>
        Sorry the page you requested does not exist{' '}
      </h1>
      <Button onClick={() => navigate('/')}>Go Home </Button>
    </div>
  );
}
