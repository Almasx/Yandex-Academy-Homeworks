import { useAppSelector } from '../../app/hooks';
import BookCard from '../../common/components/molecules/BookCard';
import Navigation from '../../common/components/molecules/Navigation';
import { selectCart } from '../../features/cart/cartSelectors';

const Cart = () => {
  const { books, total } = useAppSelector((state) => selectCart(state));

  return (
    <div className="bg-neutral-100 relative min-h-screen ">
      <Navigation />
      <main className="px-10 py-14 grid grid-cols-12 gap-5 relative content-container overflow-hidden">
        <aside className="p-5 bg-white flex flex-col gap-6 col-span-4 rounded-lg sticky top-[124px] bottom-14">
          <header className="font-bold">Ваш заказ:</header>
          <div className="flex flex-col gap-4 w-full">
            {books.length > 0 &&
              books.map((book) => (
                <div className="flex flex-row justify-between">
                  {book.title} <span className="font-bold">{book.price} $</span>
                </div>
              ))}
          </div>
          <div className="flex flex-row gap-6 text-xl items-center w-full mt-auto">
            Итого: {total} $
            <button className="ml-auto rounded-lg px-3 py-[6px] bg-black text-sm font-semibold text-white">
              Купить
            </button>
          </div>
        </aside>
        <div className="flex flex-col gap-5 col-span-8 col-start-5 overflow-y-scroll scrollbar-hidden">
          {books.length > 0 && books.map((book) => <BookCard key={book.id} book={book} />)}
        </div>
      </main>
    </div>
  );
};

export default Cart;
