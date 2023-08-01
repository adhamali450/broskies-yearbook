import { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import MiniImage from "@components/MiniImage";

const BroskiesBrowser = ({ className, broskies, onBroskieChanged }) => {
  const [selectedId, setSelectedId] = useState(0);

  const containerRefs = useRef([]);
  useEffect(() => {
    containerRefs.current = containerRefs.current.slice(0, broskies.length);
  }, [broskies]);

  // useEffect(() => {
  //   const handleArrows = (e) => {
  //     if (e.key === "ArrowRight") {
  //       broskieChangedHandler(selectedId - 1);
  //     } else if (e.key === "ArrowLeft") {
  //       broskieChangedHandler(selectedId + 1);
  //     }
  //   };
  //   document.addEventListener("keydown", (e) => {
  //     // handleArrows(e);
  //   });

  //   return () => {
  //     document.removeEventListener("keydown", (e) => {
  //       // handleArrows(e);
  //     });
  //   };
  // }, []);

  const broskieChangedHandler = (id) => {
    setSelectedId(id);
    onBroskieChanged(id);

    containerRefs.current[id].scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
  };

  return (
    <div className={className}>
      {broskies.map((broskie) => (
        <button
          key={broskie.id}
          className="w-[54px] h-[54px] rounded-lg overflow-hidden"
          style={{
            opacity: selectedId == broskie.id ? 1 : 0.5,
            border:
              selectedId == broskie.id
                ? "2px solid white"
                : "2px solid transparent",
            transition: "opacity 0.1s ease-in-out, border 0.1s ease-in-out",
          }}
          ref={(ref) => (containerRefs.current[broskie.id] = ref)}
          onClick={() => broskieChangedHandler(broskie.id)}
        >
          <MiniImage
            className="w-full h-full "
            src={broskie.face}
            verticlPosition="center"
            blur={3}
          />
        </button>
      ))}
    </div>
  );
};

BroskiesBrowser.propTypes = {
  className: PropTypes.string,
  broskies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      face: PropTypes.array.isRequired,
    })
  ).isRequired,
  onBroskieChanged: PropTypes.func.isRequired,
};

export default BroskiesBrowser;
