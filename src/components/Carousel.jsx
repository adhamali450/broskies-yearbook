import { useState, memo, useEffect } from "react";
import MiniImage from "@components/MiniImage";
import Rating from "@components/Rating";
import Badges from "@components/Badges";
import { imageClickedHandler } from "@/utils";

import PropTypes from "prop-types";

import styles from "@components/Carousel.module.sass";
import iconChevron from "@icons/chevron-left.svg";

const Carousel = ({ className = "", src, memberDetails, onImageSelected }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const toggleImageHandler = (direction) => {
    if (direction === "forward") {
      setSelectedIndex((prev) => (prev + 1) % src.length);
    } else if (direction === "backward") {
      setSelectedIndex((prev) => (prev - 1 + src.length) % src.length);
    }
  };

  useEffect(() => {
    setSelectedIndex(0);
  }, [src]);

  return (
    <div
      className={`${className} relative w-[100%] md:w-[80%] xmd:w-[60%] h-[100%] mx-auto`}
    >
      {/* <div className="absolute top-11 -right-16 rounded-full bg-[#bf0fff95] w-80 h-72 filter blur-2xl opacity-10"></div>
      <div className="absolute bottom-1 -left-1 rounded-full bg-[#570fff] w-80 h-72 filter blur-2xl opacity-10"></div>
      <div className="absolute rounded-full bg-fuchsia-300 -bottom-1 right-15 w-72 h-72 filter blur-3xl opacity-40"></div>
      <div className="absolute rounded-full bg-[#22d3ee] -bottom-1 left-1 w-72 h-72 filter blur-3xl opacity-40"></div> */}
      <div className="overflow-hidden relative w-full h-full rounded-xl">
        {/* Upper toggle buttons */}
        <div className={styles["upper-toggles"]}>
          {src.map((s, i) => {
            return (
              <button
                key={i}
                style={{
                  opacity: selectedIndex === i ? 1 : 0.5,
                }}
                onClick={() => setSelectedIndex(i)}
              ></button>
            );
          })}
        </div>

        {/* Image */}
        <MiniImage
          className="w-full h-full cursor-zoom-in "
          src={src[selectedIndex].slice(0, 2)}
          verticalPosition={src[selectedIndex][2]}
          onClick={(img) => imageClickedHandler(src, img, onImageSelected)}
          blur={6}
          forceWithinBounds
        />

        {/* Details */}
        <div className="absolute z-20 flex justify-between items-center mt-5 inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black via-gray-900 to-transparent">
          <div className="flex flex-col gap-2">
            <Rating rating={memberDetails.rating} size={15} />
            <h1 className="text-4xl font-bold">{memberDetails.name}</h1>

            <Badges
              className="flex flex-wrap gap-1 mt-3"
              tags={memberDetails.tags}
            />
          </div>
        </div>

        {/* Forwards/Backward toggle buttons */}
        {/* Left (Backward) */}
        <button
          className="absolute z-10 inset-y-0 left-0 h-full w-10 px-1 grid place-items-center"
          onClick={() => toggleImageHandler("backward")}
        >
          <img className="w-full" src={iconChevron} alt="chevron" />
        </button>

        {/* Right (Forward) */}
        <button
          className="absolute z-10 inset-y-0 right-0 h-full w-10 px-1 grid place-items-center"
          onClick={() => toggleImageHandler("forward")}
        >
          <img
            className="w-full scale-x-[-1]"
            src={iconChevron}
            alt="chevron"
          />
        </button>
      </div>
    </div>
  );
};

Carousel.propTypes = {
  className: PropTypes.string,
  src: PropTypes.array.isRequired,
  onImageSelected: PropTypes.func.isRequired,
  memberDetails: PropTypes.array,
};

const memomized = memo(Carousel, (prev, next) =>
  prev.src.every((src, i) => src[0] === next.src[i][0])
);

export default memomized;
