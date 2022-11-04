import { useState } from "react";
import { useNavigate } from "react-router-dom";
import clsx from "classnames";
import Minus from "../icons/Minus";
import Plus from "../icons/Plus";
import Rating from "../atoms/RatingStar";

interface BookCardProps {
  id: number;
  title: string;
  author: string;
  genre: string;
  price: number;
  classNames?: string;
}

const BookCard = ({
  classNames = "",
  id,
  title,
  author,
  genre,
  price,
}: BookCardProps) => {
  const [counter, setCounter] = useState<number>(0);
  const navigate = useNavigate();

  const onDecrease = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setCounter((previos) => (previos >= 1 ? previos - 1 : 0));
  };

  const onIncrease = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setCounter((previos) => previos + 1);
  };

  return (
    <button
      className={clsx(
        "bg-white flex flex-row rounded-lg justify-between items-center p-5 pt-4 ",
        classNames
      )}
      onClick={() => {
        navigate(`/books/${id}`);
      }}
    >
      {/* Content */}
      <div className="flex flex-col gap-[22px] items-start">
        <h4 className="font-bold text-xl">{title}</h4>
        <div className="flex flex-col gap-2 text-black/50 items-start">
          <p>{author}</p>
          <p>{genre}</p>
          <Rating />
        </div>
        <h3 className="font-bold text-2xl">{price}</h3>
      </div>

      <div className="flex flex-row gap-6">
        <button
          className={clsx(
            "h-9 w-9 rounded-lg bg-black  grid place-items-center",
            counter === 0 && "opacity-50"
          )}
          onClick={onDecrease}
        >
          <Minus />
        </button>
        <p
          className={clsx("font-bold text-2xl", counter === 0 && "opacity-50")}
        >
          {counter}
        </p>
        <button
          className="h-9 w-9 rounded-lg bg-black grid place-items-center"
          onClick={onIncrease}
        >
          <Plus />
        </button>
      </div>
    </button>
  );
};

export default BookCard;
