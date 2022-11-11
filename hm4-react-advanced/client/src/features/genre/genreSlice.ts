import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import genreService from './genreService';

const genres = await genreService.getGenres();

const initialState = {
  genres: genres,
  genre: genres[0],
};

export const genreSlice = createSlice({
  name: 'genres',
  initialState,
  reducers: {
    setGenre(state, action: PayloadAction<string>) {
      state.genre = state.genres.find((genre) => genre.id === action.payload)!;
    },
  },
});

export const { setGenre } = genreSlice.actions;
export default genreSlice.reducer;
