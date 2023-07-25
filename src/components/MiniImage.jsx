import PropTypes from "prop-types";
import { rangedRandom, rangedRandomInt } from "@utils";

const MiniImage = ({ src, verticalPosition = "center", onClick }) => {
  return (
    <div
      className="relative z-10 w-full h-full bg-cover rounded-xl cursor-zoom-in"
      onClick={() => onClick(src)}
      style={{
        backgroundImage: `url('${src}')`,
        backgroundPosition: verticalPosition,
        transform: `rotate(${
          rangedRandomInt(0, 1) == 0 ? rangedRandom(-2, 0) : rangedRandom(0, 2)
        }deg)`,
        transformOrigin: "center",
        transition: "transform 100ms ease-in",
      }}
    ></div>
  );
};

// prop validation
MiniImage.propTypes = {
  src: PropTypes.string.isRequired,
  verticalPosition: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

export default MiniImage;
