import { useNavigate } from 'react-router-dom';
import clsx from 'classnames';
import { ReactComponent as Plus } from '../../assets/icons/Plus.svg';
import { ReactComponent as Minus } from '../../assets/icons/Minus.svg';
import Rating from '../atoms/RatingStar';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { removeBook, addBook } from '../../../features/cart/cartSlice';

interface BookCardProps {
  book: IBook;
  classNames?: string;
}

const BookCard = ({ classNames = '', book }: BookCardProps) => {
  const navigate = useNavigate();

  const dispatch = useAppDispatch();
  const { genre } = useAppSelector((state) => state.genre);
  const quantity = useAppSelector((state) => state.cart[book.id])?.quantity || 0;

  return (
    <div
      className={clsx('bg-white flex flex-row rounded-lg justify-between items-center p-5 pt-4 ', classNames)}
      onClick={() => {
        navigate(`/books/${book.id}`);
      }}
    >
      {/* Content */}
      <div className="flex flex-col gap-[22px] items-start">
        <h4 className="font-bold text-xl">{book.title}</h4>
        <div className="flex flex-col gap-2 text-black/50 items-start">
          <p>{book.author}</p>
          <p>{genre.genre}</p>
          <Rating />
        </div>
        <h3 className="font-bold text-2xl">{book.price} $</h3>
      </div>

      <div className="flex flex-row gap-6">
        <button
          className={clsx('h-9 w-9 rounded-lg bg-black  grid place-items-center', quantity === 0 && 'opacity-50')}
          onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
            e.stopPropagation();
            dispatch(removeBook(book));
          }}
        >
          <Minus />
        </button>
        <p className={clsx('font-bold text-2xl', quantity === 0 && 'opacity-50')}>{quantity}</p>
        <button
          className="h-9 w-9 rounded-lg bg-black grid place-items-center"
          onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
            e.stopPropagation();
            dispatch(addBook(book));
          }}
        >
          <Plus />
        </button>
      </div>
    </div>
  );
};

export default BookCard;
