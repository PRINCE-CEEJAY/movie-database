import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  faveFeatures: [
    {
      id: crypto.randomUUID(),
      movieTitle: 'Merlin',
      imageUrl: '/merlin.jpeg',
      votes: 0,
      watched: false,
    },
  ],
};

const favSlice = createSlice({
  name: 'favourites',
  initialState,
  reducers: {
    addFavourite: (state, action) => {
      if (!action.payload) return;
      state.faveFeatures.push({
        id: crypto.randomUUID(),
        ...action.payload,
      });
    },

    removeFavourite: (state, action) => {
      const existingIndex = state.faveFeatures.findIndex(
        (movie) => movie.id === action.payload,
      );
      if (existingIndex !== -1) {
        state.faveFeatures.splice(existingIndex, -1);
      }
    },
  },
});

export const { addFavourite, removeFavourite } = favSlice.actions;
export default favSlice.reducer;
