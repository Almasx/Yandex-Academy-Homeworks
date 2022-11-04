import BookCard from "../../components/molecules/BookCard";
import Navigation from "../../components/molecules/Navigation";
import Reviews from "./Reviews";
import { useParams } from "react-router-dom";
import { books, genres } from "../../constants/mock";

const Book = () => {
  const { bookId } = useParams();
  const { title, author, genreId, price, reviews, description, id } =
    books[parseInt(bookId!)];

  return (
    <div className="bg-neutral-100 relative min-h-screen">
      <Navigation />
      <main className="px-10 py-14 grid grid-cols-12 gap-5 gap-y-10 ">
        <BookCard
          classNames="!items-end col-span-6"
          id={id}
          title={title}
          author={author}
          genre={genres[genreId!]}
          price={price}
        />
        <div className="bg-white flex-col flex rounded-lg p-5 gap-4 col-span-6 col-start-7">
          <h4 className="font-bold">Аннотация</h4>
          <p className="text-sm">{description}</p>
        </div>

        <div className="flex flex-col col-span-full gap-4">
          {reviews.map((review) => (
            <Reviews author={review.user} review={review.review} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Book;
