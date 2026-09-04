import { Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import NotFound from './pages/NotFound';
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
