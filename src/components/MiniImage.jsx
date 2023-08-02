import PropTypes from "prop-types";
import { useRef, useEffect } from "react";

const MiniImage = ({
  className = "",
  src,
  verticalPosition = "center",
  blur = 10,
  style = {},
  onClick = () => {},
}) => {
  const [thumbnail, image] = src;

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
  }, [src]);

  return (
    <div
      ref={containerRef}
      className={`${className} relative bg-no-repeat`}
      onClick={() => onClick(src)}
      style={{
        backgroundSize: "cover",
        backgroundImage: `url('${thumbnail}')`,
        backgroundPosition: verticalPosition,
        filter: `blur(${blur}px)`,
        overflow: "hidden",
        ...style,
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
