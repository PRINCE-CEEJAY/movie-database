import axios from 'axios';
import { type Movie } from '../types/movie';

const BASE_URL = import.meta.env.VITE_API_BASE_URL;
const ACCESS_TOKEN = import.meta.env.VITE_API_ACCESS_TOKEN;
export { cn } from 'cn';

export async function fetchMovies(movieName: string | undefined) {
  const MOVIE_URL = `${BASE_URL}/search/movie?query=${movieName}`;
  try {
    const res = await axios.get(MOVIE_URL, {
      headers: { Authorization: `Bearer ${ACCESS_TOKEN}` },
    });
    const data: Movie[] = res.data.results;
    return data;
  } catch (error) {
    console.log(error);
  }
}
