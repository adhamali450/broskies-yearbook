import { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";

const BroskiesBrowser = ({ className, broskies, onBroskieChanged }) => {
  const [selectedId, setSelectedId] = useState(0);

  const containerRefs = useRef([]);
  useEffect(() => {
    containerRefs.current = containerRefs.current.slice(0, broskies.length);
  }, [broskies]);

  const buttonClickedHandler = (e, index) => {
    setSelectedId(index);
    onBroskieChanged(index);

    containerRefs.current[index].scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
  };

  return (
    <div className={className}>
      {broskies.map((broskie, i) => (
        <button
          key={i}
          className="w-[54px] h-[54px] rounded-lg bg-cover bg-center bg-no-repeat"
          style={{
            opacity: selectedId == i ? 1 : 0.5,
            border:
              selectedId == i ? "2px solid white" : "2px solid transparent",
            backgroundImage: `url('${broskie.face}')`,
            transition: "opacity 0.25s ease-in-out, border 0.25s ease-in-out",
          }}
          ref={(ref) => (containerRefs.current[i] = ref)}
          onClick={(e) => buttonClickedHandler(e, i)}
        ></button>
      ))}
    </div>
  );
};

BroskiesBrowser.propTypes = {
  className: PropTypes.string,
  broskies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      face: PropTypes.string.isRequired,
    })
  ).isRequired,
  onBroskieChanged: PropTypes.func.isRequired,
};

export default BroskiesBrowser;
