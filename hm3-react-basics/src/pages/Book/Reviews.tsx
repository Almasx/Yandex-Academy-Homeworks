import RatingStar from "../../components/atoms/RatingStar";

interface ReviewsProps {
  author: string;
  review: string;
}

const Reviews = ({ author, review }: ReviewsProps) => {
  return (
    <div className="bg-white flex-col flex rounded-lg p-5 gap-4 col-span-6 col-start-7">
      <div className="flex flex-row justify-between">
        <h4 className="font-bold">{author}</h4>
        <RatingStar />
      </div>
      <p className="text-sm">{review}</p>
    </div>
  );
};

export default Reviews;
