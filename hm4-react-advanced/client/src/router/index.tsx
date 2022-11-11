import { createBrowserRouter } from 'react-router-dom';
import Book from '../pages/Book';
import Cart from '../pages/Cart';
import Home from '../pages/Home';

export const router = createBrowserRouter([
  { path: '/', element: <Home />, errorElement: <div>Page not found</div> },
  { path: 'books/:book_id', element: <Book /> },
  { path: 'cart', element: <Cart /> },
]);
