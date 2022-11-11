import { ReactComponent as Star } from '../../assets/icons/StarFilled.svg';
import { ReactComponent as StarStroke } from '../../assets/icons/StarStroke.svg';

const RatingStar = () => {
  return (
    <div className="flex flex-row gap-[5px]">
      <Star />
      <Star />
      <Star />
      <Star />
      <StarStroke />
    </div>
  );
};

export default RatingStar;
