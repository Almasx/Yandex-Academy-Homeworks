import { books, genres } from "../../constants/mock";
import BookCard from "../../components/molecules/BookCard";
import Navigation from "../../components/molecules/Navigation";
import { useEffect, useState } from "react";
import clsx from "classnames";

const Home = () => {
  const [filter, setFilter] = useState<number>(0);
  const [catalog, setCatalog] = useState(books);

  useEffect(() => {
    setCatalog(books.filter((book) => book.genreId === filter));
  }, [filter]);

  return (
    <div className="bg-neutral-100 relative min-h-screen">
      <Navigation />
      <main className="px-10 py-14 grid grid-cols-12 gap-5 relative content-container overflow-hidden">
        <aside className="p-5 bg-white flex flex-col gap-6 col-span-3 rounded-lg items-start sticky top-[124px] bottom-14">
          {genres.map((genre, index) => (
            <button
              key={index}
              onClick={() => setFilter(index)}
              className={clsx("text-start", index === filter && "font-bold")}
            >
              {genre}
            </button>
          ))}
        </aside>
        <div className="flex flex-col gap-5 col-span-9 col-start-4 overflow-y-scroll scrollbar-hidden">
          {catalog.map((book) => (
            <BookCard
              key={book.id}
              id={book.id}
              title={book.title}
              author={book.author}
              genre={genres[book.genreId]}
              price={book.price}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Home;
