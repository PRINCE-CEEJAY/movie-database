import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Navbar from '../src/components/Navbar';
import { BrowserRouter } from 'react-router-dom';
const client = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={client}>
    <BrowserRouter>
    <Navbar />
    <App />
    </BrowserRouter>
  </QueryClientProvider>,
);
