import { Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import NotFound from './components/NotFound';
export default function App() {
  return (
    <div className='flex flex-col justify-center items-center min-h-screen'>
      <Routes>
        <Route
          path='/'
          element={<Homepage />}
        />
        <Route
          path='*'
          element={<NotFound />}
        />
      </Routes>
    </div>
  );
}
