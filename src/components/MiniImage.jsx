import PropTypes from "prop-types";
import { useRef, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const MiniImage = ({
  className = "",
  src,
  verticalPosition = "center",
  blur = 3,
  style = {},
  onClick = () => {},
  forceWithinBounds = false,
  lazyLoaded = false,
}) => {
  const containerRef = useRef(null);
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0,
  });

  const [loadedSrc, setLoadedSrc] = useState("");
  useEffect(() => {
    if (lazyLoaded && inView && !loadedSrc) setLoadedSrc(src[1]);
  }, [inView]);

  useEffect(() => {
    if (!containerRef.current) return;

    const img = containerRef.current.querySelector("img");
    img.onload = () => {
      img.style.opacity = 1;
    };
  }, [containerRef]);

  useEffect(() => {
    if (!containerRef.current) return;

    const img = containerRef.current.querySelector("img");

    img.style.opacity = 0;
  }, [src]);

  return (
    <div className={`${className} relative overflow-hidden`} style={style}>
      <div
        ref={containerRef}
        className={`relative bg-no-repeat w-full h-full`}
        onClick={() => onClick(src[1])}
        style={{
          backgroundSize: "cover",
          backgroundImage: `url('${src[0]}')`,
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
          ref={ref}
          className="relative z-[3] w-full h-full"
          src={lazyLoaded ? loadedSrc : src[1]}
          alt=""
          style={{
            opacity: 0,
            transition: "opacity 0.15s ease-in-out",
            objectFit: forceWithinBounds ? "contain" : "cover",
            objectPosition: forceWithinBounds ? "center" : verticalPosition,
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
  forceWithinBounds: PropTypes.bool,
  lazyLoaded: PropTypes.bool,
};

export default MiniImage;
