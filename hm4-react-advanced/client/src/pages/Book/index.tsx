import Reviews from './Reviews';
import { useParams } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { fetchBook, reset } from '../../features/book/bookSlice';
import { useEffect } from 'react';
import BookCard from '../../common/components/molecules/BookCard';
import { Statuses } from '../../common/constants/statuses';
import Navigation from '../../common/components/molecules/Navigation';

const Book = () => {
  const { book_id } = useParams();
  const { book, status } = useAppSelector((state) => state.book);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchBook(book_id!));

    return () => {
      dispatch(reset());
    };
  }, []);

  return (
    <div className="bg-neutral-100 relative min-h-screen">
      <Navigation />
      <main className="px-10 py-14 grid grid-cols-12 gap-5 gap-y-10 ">
        {status === Statuses.success && <BookCard classNames="!items-end col-span-6" book={book as Required<IBook>} />}
        <div className="bg-white flex-col flex rounded-lg p-5 gap-4 col-span-6 col-start-7">
          <h4 className="font-bold">Аннотация</h4>
          {status === Statuses.success && <p className="text-sm">{book.description}</p>}
        </div>

        <div className="flex flex-col col-span-full gap-4">
          {status === Statuses.success &&
            book.reviews!.map((review) => <Reviews author={review.user} review={review.review} />)}
        </div>
      </main>
    </div>
  );
};

export default Book;
