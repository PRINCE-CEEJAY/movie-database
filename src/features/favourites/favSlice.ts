import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  faveFeatures: [
    {
      id: crypto.randomUUID(),
      movieTitle: '',
      movieImage: '',
      votes: 0,
      likes: 0,
    },
  ],
};

const favSlice = createSlice({
  name: 'faveSlice',
  initialState,
  reducers: {
    addFavourite: (state, action) => {
      state.faveFeatures.push({
        ...action.payload,
      });
    },

    removeFavourite: (state, action) => {
      const existingIndex = state.faveFeatures.findIndex(
        (movie) => movie.id === action.payload,
      );
      if (existingIndex !== -1) {
        state.faveFeatures.slice(existingIndex, -1);
      }
    },
  },
});

export const { addFavourite, removeFavourite } = favSlice.actions;
export default favSlice.reducer;
