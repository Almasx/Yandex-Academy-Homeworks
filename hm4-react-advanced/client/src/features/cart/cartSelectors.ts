import { RootState } from '../../app/store';

export const selectCart = (state: RootState) => {
  const books = Object.values(state.cart)
    .filter((book) => book.quantity > 0)
    .map((book) => book.book);
  const total = books.reduce((sum: number, book) => sum + book.price, 0);
  return { books, total };
};
