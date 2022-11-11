import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'slice',
  initialState: {} as { [key: string]: { quantity: number; book: IBook } },
  reducers: {
    addBook: (state, action: PayloadAction<IBook>) => {
      state[action.payload.id] = { quantity: (state[action.payload.id]?.quantity || 0) + 1, book: action.payload };
    },
    removeBook: (state, action: PayloadAction<IBook>) => {
      state[action.payload.id] = {
        quantity: state[action.payload.id]?.quantity === 0 ? 0 : state[action.payload.id]?.quantity - 1,
        book: action.payload,
      };
    },
  },
});

export const { addBook, removeBook } = cartSlice.actions;
export default cartSlice.reducer;
