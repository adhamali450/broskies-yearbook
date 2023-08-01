import PropTypes from "prop-types";
import iconsRating from "@icons/rating";

const Rating = ({ rating }) => {
  if (rating > 5) rating = 5;
  else if (rating < 0) rating = 0;

  const wholeStars = Math.floor(rating);

  const hasHalfStar = rating - wholeStars >= 0.5;

  const starsArray = [];

  Array(wholeStars)
    .fill(0)
    .forEach((_, i) => {
      starsArray.push(
        <img key={i} className="w-5" src={iconsRating.full} alt="Full Star" />
      );
    });

  if (hasHalfStar) {
    starsArray.push(
      <img
        key="half"
        className="-scale-x-[1] w-5"
        src={iconsRating.half}
        alt="Half Star"
      />
    );
  }

  Array(5 - wholeStars - hasHalfStar)
    .fill(0)
    .forEach((_, i) => {
      starsArray.push(
        <img
          key={i}
          className="w-5"
          src={iconsRating.hollow}
          alt="Hollow Star"
        />
      );
    });

  return <div className="flex gap-1">{starsArray}</div>;
};

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default Rating;
