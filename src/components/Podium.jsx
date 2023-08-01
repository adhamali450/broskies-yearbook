import MiniImage from "@components/MiniImage";
import iconCrown from "@assets/crown.svg";
import PropTypes from "prop-types";

const Podium = ({ className, winners, colors }) => {
  return (
    <div className={`${className} relative grid grid-rows-3 grid-cols-3 `}>
      <span
        className="absolute -z-10 col-start-1 col-span-3 row-start-2 bg-blue-900 bottom-0 inset-x-0 h-[65%] rounded-t-3xl rounded-b-lg"
        style={{
          backgroundColor: "rgba(61, 61, 61, 0.8)",
        }}
      ></span>
      <span
        className="absolute -z-10 row-start-1 row-span-3 col-start-2 col-span-1 inset-x-0 bottom-0 h-[65%] rounded-t-3xl  shadow-md"
        style={{
          backgroundColor: "rgba(61, 61, 61, 0.99)",
        }}
      ></span>
      <div className="row-start-2 row-span-2 col-start-1 flex flex-col items-center">
        <div className="relative flex flex-col items-center">
          <MiniImage
            className={`w-[100px] h-[100px] rounded-full`}
            src={winners[2].face}
            style={{
              border: `5px solid ${colors[2]}`,
            }}
          />
          <span
            className="absolute inline-block font-black rounded-full px-2 -translate-x-1/2 left-1/2 -bottom-3"
            style={{
              backgroundColor: colors[2],
              color: "rgba(0,0,0,0.5)",
            }}
          >
            3
          </span>
        </div>
        <span className="mt-5">{winners[2].name}</span>
        <span
          className="font-black rounded-xl px-2 mt-2 mb-4"
          style={{
            backgroundColor: colors[2],
            color: "rgba(0,0,0,0.5)",
          }}
        >
          {winners[2].points}
        </span>
      </div>
      <div className="row-span-3 col-start-2 flex flex-col items-center">
        <div className="relative flex flex-col items-center">
          <img className="w-14 -mb-1" src={iconCrown} alt="Crown" />
          <MiniImage
            className="w-[100px] h-[100px] rounded-full "
            src={winners[0].face}
            style={{
              border: `5px solid ${colors[0]}`,
            }}
          />
          <span
            className="absolute inline-block font-black rounded-full px-2 -translate-x-1/2 left-1/2 -bottom-3"
            style={{
              backgroundColor: colors[0],
              color: "rgba(0,0,0,0.5)",
            }}
          >
            1
          </span>
        </div>
        <span className="mt-5">{winners[0].name}</span>
        <span
          className="font-black rounded-xl px-2 mt-2 mb-4"
          style={{
            backgroundColor: colors[0],
            color: "rgba(0,0,0,0.5)",
          }}
        >
          {winners[0].points}
        </span>
      </div>
      <div className="row-start-2 row-span-2 col-start-3 flex flex-col items-center">
        <div className="relative flex flex-col items-center">
          <MiniImage
            className="w-[100px] h-[100px] rounded-full "
            src={winners[1].face}
            style={{
              border: `5px solid ${colors[1]}`,
            }}
          />
          <span
            className="absolute inline-block font-black rounded-full px-2 -translate-x-1/2 left-1/2 -bottom-3"
            style={{
              backgroundColor: colors[1],
              color: "rgba(0,0,0,0.5)",
            }}
          >
            2
          </span>
        </div>
        <span className="mt-5">{winners[1].name}</span>
        <span
          className="font-black rounded-xl px-2 mt-2 mb-4"
          style={{
            backgroundColor: colors[1],
            color: "rgba(0,0,0,0.5)",
          }}
        >
          {winners[1].points}
        </span>
      </div>
    </div>
  );
};

Podium.propTypes = {
  className: PropTypes.string,
  winners: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      face: PropTypes.arrayOf(PropTypes.string, PropTypes.string),
      points: PropTypes.number,
      rating: PropTypes.number,
    })
  ),
  colors: PropTypes.arrayOf(PropTypes.string),
};

export default Podium;
