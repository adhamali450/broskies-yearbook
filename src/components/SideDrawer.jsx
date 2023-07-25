import PropTypes from "prop-types";

import drawerIcons from "@assets/icons/drawer";

const SideDrawer = ({ className = "" }) => {
  return (
    <aside className={`${className} h-full`}>
      <div className="flex flex-col">
        <button className="nav-btn active">
          <img src={drawerIcons.home} alt="home" />
          <span className="text-sm font-semibold text-[#43BBFF]">الهوم</span>
        </button>
        <button className="nav-btn">
          <img src={drawerIcons.members} alt="members" />
          <span className="text-sm font-semibold text-[#FF4AA1]">
            اعضاء القروب
          </span>
        </button>
        <button className="nav-btn">
          <img src={drawerIcons.gallery} alt="gallery" />
          <span className="text-sm font-semibold text-[#78FF48]">صورنا</span>
        </button>
        <button className="nav-btn">
          <img src={drawerIcons.leaderboard} alt="leaderboard" />
          <span className="text-sm font-semibold text-[#D764FF]">
            رتبة الاعضاء
          </span>
        </button>
      </div>
    </aside>
  );
};

SideDrawer.propTypes = {
  className: PropTypes.string,
};

export default SideDrawer;
