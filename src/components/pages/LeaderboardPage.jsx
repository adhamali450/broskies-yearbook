import MiniImage from "@components/MiniImage";
import Rating from "@components/Rating";
import Podium from "@components/Podium";
import styles from "@pages/LeaderboardPage.module.sass";
import PropTypes from "prop-types";
import { arNum } from "@/utils";

const LeaderboardPage = ({ leaderboardDetails }) => {
  leaderboardDetails = leaderboardDetails.sort((a, b) => b.points - a.points);
  const topThree = leaderboardDetails.slice(0, 3).map((user) => ({
    ...user,
  }));

  return (
    <div className="relative container h-full py-8 px-6">
      <span className="fixed inline-block w-1/3 h-full -translate-x-1/2 left-1/2 rounded-full bg-[#0109D3] opacity-[0.6] blur-[500px]"></span>
      <Podium
        className="w-1/2 mx-auto"
        winners={topThree}
        colors={["#FEDE00", "#009BD6", "#00D95F"]}
      />

      <div className="w-full h-full flex flex-col items-start gap-2 py-8">
        {leaderboardDetails.slice(3).map((user, index) => {
          const rating = `${arNum(5)}/${arNum(user.rating)}`;
          return (
            <div className={styles["member-row"]} key={index}>
              <span
                className="inline-block font-black rounded-full px-2"
                style={{
                  backgroundColor: "#d764ff",
                  color: "rgba(0,0,0,0.7)",
                }}
              >
                {arNum(index + 4)}
              </span>
              <MiniImage
                className="w-[70px] h-[70px] rounded-md"
                src={user.face}
              />
              <div className="flex flex-col gap-1 grow">
                <span className="font-bold">{user.name}</span>
                <span className="text-sm">{arNum(user.points)}</span>
              </div>
              <div className="grid grid-cols-[1fr_40px] gap-3">
                <Rating rating={user.rating} size={15} />
                <span className="text-sm justify-self-end">{rating}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

LeaderboardPage.propTypes = {
  leaderboardDetails: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      face: PropTypes.arrayOf(PropTypes.string, PropTypes.string),
      points: PropTypes.number,
      rating: PropTypes.number,
    })
  ),
};

export default LeaderboardPage;
