import MiniImage from "@components/MiniImage";
import styles from "@components/Podium.module.sass";
import iconCrown from "@assets/crown.svg";
import PropTypes from "prop-types";
import { arNum } from "@/utils";

const Podium = ({ className, winners, colors }) => {
  return (
    <div className={`${className} ${styles["podium"]}`}>
      <span className={styles["block-base"]}></span>
      <span className={styles["block-center"]}></span>
      <div className={styles["pos-3rd"]}>
        <div className={styles["img-container"]}>
          <MiniImage
            className={styles["mini-img"]}
            src={winners[1].face}
            style={{
              borderColor: `${colors[1]}`,
            }}
          />
          <span
            className={styles["rank"]}
            style={{
              backgroundColor: colors[1],
              color: "rgba(0,0,0,0.5)",
            }}
          >
            {arNum(2)}
          </span>
        </div>
        <span className={styles["name"]}>{winners[1].name}</span>
        <span
          className={styles["points"]}
          style={{
            backgroundColor: colors[1],
            color: "rgba(0,0,0,0.5)",
          }}
        >
          {arNum(winners[2].points)}
        </span>
      </div>
      <div className={styles["pos-1st"]}>
        <div className={styles["img-container"]}>
          <img className="w-12 md:w-14 -mb-1" src={iconCrown} alt="Crown" />
          <MiniImage
            className={styles["mini-img"]}
            src={winners[0].face}
            style={{
              borderColor: `${colors[0]}`,
            }}
          />
          <span
            className={styles["rank"]}
            style={{
              backgroundColor: colors[0],
              color: "rgba(0,0,0,0.5)",
            }}
          >
            {arNum(1)}
          </span>
        </div>
        <span className={styles["name"]}>{winners[0].name}</span>
        <span
          className={styles["points"]}
          style={{
            backgroundColor: colors[0],
            color: "rgba(0,0,0,0.5)",
          }}
        >
          {arNum(winners[0].points)}
        </span>
      </div>
      <div className={styles["pos-2nd"]}>
        <div className={styles["img-container"]}>
          <MiniImage
            className={styles["mini-img"]}
            src={winners[2].face}
            style={{
              borderColor: `${colors[2]}`,
            }}
          />
          <span
            className={styles["rank"]}
            style={{
              backgroundColor: colors[2],
              color: "rgba(0,0,0,0.5)",
            }}
          >
            {arNum(3)}
          </span>
        </div>
        <span className={styles["name"]}>{winners[2].name}</span>
        <span
          className={styles["points"]}
          style={{
            backgroundColor: colors[2],
            color: "rgba(0,0,0,0.5)",
          }}
        >
          {arNum(winners[2].points)}
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
