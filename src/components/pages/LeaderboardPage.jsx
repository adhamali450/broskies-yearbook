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
    <div className="relative h-full md:px-8 py-8 ">
      <span className="fixed inline-block w-1/3 h-full -translate-x-1/2 left-1/2 rounded-full bg-[#0109D3] opacity-[0.7] blur-[250px] md:blur-[300px] lg:blur-[500px]"></span>
      <Podium
        className="w-[90%] sm:w-2/3 lg:w-1/2  mx-auto "
        winners={topThree}
        colors={["#F8D000", "#43BBFF", "#78FF48"]}
      />

      <div className="h-full flex flex-col gap-2 py-8">
        {leaderboardDetails.slice(3).map((user, index) => {
          const rating = `${arNum(5)}/${arNum(user.rating)}`;
          return (
            <div className={styles["member-row"]} key={index}>
              <span
                className="inline-block text-xs md:text-sm font-black rounded-full px-2"
                style={{
                  backgroundColor: "#d764ff",
                  color: "rgba(0,0,0,0.7)",
                }}
              >
                {arNum(index + 4)}
              </span>
              <MiniImage
                className="w-[60px] h-[60px] md:w-[70px] md:h-[70px] rounded-md"
                src={user.face}
              />
              <div className="flex flex-col gap-1 grow">
                <span className="text-sm md:text-base font-bold">
                  {user.name}
                </span>
                <span className="text-xs md:text-sm">{arNum(user.points)}</span>
              </div>
              <div className="grid md:grid-cols-[1fr_40px] gap-3">
                <Rating rating={user.rating} size={15} />
                <span className="text-xs md:text-sm justify-self-end">
                  {rating}
                </span>
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
