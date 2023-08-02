import PropTypes from "prop-types";
import { useRef, useEffect } from "react";

const MiniImage = ({
  className = "",
  src,
  verticalPosition = "center",
  blur = 3,
  style = {},
  onClick = () => {},
}) => {
  let [thumbnail, image] = src;

  const containerRef = useRef(null);
  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const img = containerRef.current.querySelector("img");
    img.onload = () => {
      container.style.filter = "blur(0px)";
      img.style.opacity = 1;
    };
  }, [containerRef]);

  useEffect(() => {
    if (!containerRef.current) return;

    const img = containerRef.current.querySelector("img");

    img.style.opacity = 0;
    containerRef.current.style.filter = `blur(${blur}px)`;
  }, [src]);

  return (
    <div className={`${className} relative overflow-hidden`} style={style}>
      <div
        ref={containerRef}
        className={`bg-no-repeat w-full h-full`}
        onClick={() => onClick(src)}
        style={{
          backgroundSize: "cover",
          backgroundImage: `url('${thumbnail}')`,
          backgroundPosition: verticalPosition,
          filter: `blur(${blur}px)`,
          overflow: "hidden",
        }}
      >
        <img
          className="w-full h-full"
          src={image}
          alt=""
          style={{
            opacity: 0,
            transition: "opacity 0.15s ease-in-out",
            objectFit: "cover",
            objectPosition: verticalPosition,
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
  onClick: PropTypes.func,
};

export default MiniImage;
