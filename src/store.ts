import { configureStore } from '@reduxjs/toolkit';
import faveReducer from './features/favourites/favSlice';
export const store = configureStore({
  reducer: { favorites: faveReducer },
});
