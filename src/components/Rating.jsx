import PropTypes from "prop-types";
import iconsRating from "@icons/rating";

const Rating = ({ rating, size = 20 }) => {
  if (!rating) rating = 0;
  else if (rating > 5) rating = 5;
  else if (rating < 0) rating = 0;

  const wholeStars = Math.floor(rating);

  const hasHalfStar = rating - wholeStars >= 0.5;

  const starsArray = [];

  Array(wholeStars)
    .fill(0)
    .forEach((_, i) => {
      starsArray.push(
        <img
          key={`full-${i}`}
          src={iconsRating.full}
          alt="Full Star"
          style={{
            width: size,
          }}
        />
      );
    });

  if (hasHalfStar) {
    starsArray.push(
      <img
        key={`half-${wholeStars}`}
        className="-scale-x-[1]"
        src={iconsRating.half}
        alt="Half Star"
        style={{
          width: size,
        }}
      />
    );
  }

  Array(5 - wholeStars - hasHalfStar)
    .fill(0)
    .forEach((_, i) => {
      starsArray.push(
        <img
          key={`hollow-${i}`}
          src={iconsRating.hollow}
          alt="Hollow Star"
          style={{
            width: size,
          }}
        />
      );
    });

  return (
    <div
      className="flex gap-1"
      style={{
        direction: "ltr",
        width: "fit-content",
        transform: "scaleX(-1)",
      }}
    >
      {starsArray}
    </div>
  );
};

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
  size: PropTypes.number,
};

export default Rating;
