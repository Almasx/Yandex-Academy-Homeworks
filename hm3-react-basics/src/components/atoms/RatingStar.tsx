import Star from "../icons/Star";

const RatingStar = () => {
  return (
    <div className="flex flex-row gap-[5px]">
      <Star />
      <Star />
      <Star />
      <Star />
      <Star variant="stroke" />
    </div>
  );
};

export default RatingStar;
