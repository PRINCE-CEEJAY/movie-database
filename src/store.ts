import { configureStore } from '@reduxjs/toolkit';
import faveReducer from './features/favourites/favSlice';
import filterReducer from './features/filters/filterSlice';

export const store = configureStore({
  reducer: { favorites: faveReducer, filters: filterReducer },
});
