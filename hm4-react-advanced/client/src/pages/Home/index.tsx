import { useEffect } from 'react';
import clsx from 'classnames';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { getCatalog } from '../../features/catalog/catalogSlice';
import { setGenre } from '../../features/genre/genreSlice';
import BookCard from '../../common/components/molecules/BookCard';
import { Statuses } from '../../common/constants/statuses';
import Navigation from '../../common/components/molecules/Navigation';

const Home = () => {
  const dispatch = useAppDispatch();
  const { catalog, status } = useAppSelector((state) => state.catalog);
  const { genres, genre } = useAppSelector((state) => state.genre);

  useEffect(() => {
    dispatch(getCatalog(genre.id));
  }, [genre]);

  return (
    <div className="bg-neutral-100 relative min-h-screen">
      <Navigation />
      <main className="px-10 py-14 grid grid-cols-12 gap-5 relative content-container overflow-hidden">
        <aside className="p-5 bg-white flex flex-col gap-6 col-span-3 rounded-lg items-start sticky top-[124px] bottom-14">
          {genres.length > 0 &&
            genres.map((genre_map) => (
              <button
                key={genre_map.id}
                onClick={() => dispatch(setGenre(genre_map.id))}
                className={clsx('text-start', genre_map.id === genre.id && 'font-bold')}
              >
                {genre_map.genre}
              </button>
            ))}
        </aside>
        <div className="flex flex-col gap-5 col-span-9 col-start-4 overflow-y-scroll scrollbar-hidden">
          {status === Statuses.success && catalog.map((book) => <BookCard key={book.id} book={book} />)}
        </div>
      </main>
    </div>
  );
};

export default Home;
