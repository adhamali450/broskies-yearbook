import PropTypes from "prop-types";
import { useRef, useEffect } from "react";

const MiniImage = ({
  className = "",
  src,
  verticalPosition = "center",
  blur = 3,
  style = {},
  forceWithinBounds = true,
  onClick = () => {},
}) => {
  let [thumbnail, image] = src;

  const containerRef = useRef(null);
  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const img = containerRef.current.querySelector("img");
    img.onload = () => {
      // container.style.filter = "blur(0px)";
      img.style.opacity = 1;
    };
  }, [containerRef]);

  useEffect(() => {
    if (!containerRef.current) return;

    const img = containerRef.current.querySelector("img");

    img.style.opacity = 0;
    // containerRef.current.style.filter = `blur(${blur}px)`;
  }, [src]);

  return (
    <div className={`${className} relative overflow-hidden`} style={style}>
      <div
        ref={containerRef}
        className={`relative bg-no-repeat w-full h-full`}
        onClick={() => onClick(src[1])}
        style={{
          backgroundSize: "cover",
          backgroundImage: `url('${thumbnail}')`,
          backgroundPosition: verticalPosition,
          overflow: "hidden",
        }}
      >
        <div
          className="absolute inset-0 z-[2]"
          style={{
            backdropFilter: `blur(${blur}px)`,
          }}
        ></div>
        <img
          className="relative z-[3] w-full h-full"
          src={image}
          alt=""
          style={{
            opacity: 0,
            transition: "opacity 0.15s ease-in-out",
            objectFit: "contain",
            // objectPosition: verticalPosition,
            objectPosition: "center",
          }}
        />
      </div>
    </div>
  );
};

MiniImage.propTypes = {
  className: PropTypes.string,
  src: PropTypes.array.isRequired,
  verticalPosition: PropTypes.string,
  blur: PropTypes.number,
  style: PropTypes.object,
  forceWithinBounds: PropTypes.bool,
  onClick: PropTypes.func,
};

export default MiniImage;
