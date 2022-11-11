import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { Statuses } from '../../common/constants/statuses';
import bookService from './bookService';

const initialState = {
  book: {} as Partial<IBook>,
  status: Statuses.idle,
};

// Get filtered catalog
export const fetchBook = createAsyncThunk<IBook | undefined, string, { rejectValue: string }>(
  'book/get',
  async (books_id, thunkAPI) => {
    try {
      return await bookService.getBook(books_id);
    } catch (error: any) {
      const message = error.response?.data?.message || error.message || error.toString();
      thunkAPI.rejectWithValue(message);
    }
  },
);

export const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    reset: (state) => {
      state.status = Statuses.idle;
      state.book = {};
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBook.pending, (state) => {
        state.status = Statuses.loading;
        state.book = {};
      })
      .addCase(fetchBook.fulfilled, (state, action: PayloadAction<IBook | undefined>) => {
        state.status = Statuses.success;
        state.book = action.payload!;
      })
      .addCase(fetchBook.rejected, (state, action) => {
        state.status = Statuses.rejected;
        state.book = {};
      });
  },
});

export const { reset } = bookSlice.actions;
export default bookSlice.reducer;
