import PropTypes from "prop-types";

import drawerIcons from "@icons/drawer";
import { NavLink } from "react-router-dom";

// TODO: logo
// import logo from "../assets/icons/drawer/Frame55.svg";
const SideDrawer = ({ className = "" }) => {
  const links = [
    {
      route: "/",
      icon: drawerIcons.home,
      text: "الهوم",
      color: "#43BBFF",
    },
    {
      route: "/members",
      icon: drawerIcons.members,
      text: "اعضاء القروب",
      color: "#FF4AA1",
    },
    {
      route: "/gallery",
      icon: drawerIcons.gallery,
      text: "صورنا",
      color: "#78FF48",
    },
    {
      route: "/leaderboard",
      icon: drawerIcons.leaderboard,
      text: "رتبة الاعضاء",
      color: "#D764FF",
    },
  ];
  return (
    <aside className={`${className}`}>
      <ul className="flex flex-col">
        {links.map((nav, index) => (
          <NavLink
            key={index}
            to={nav.route}
            className={`nav-btn`}
            activeclassname="active"
          >
            <img src={nav.icon} alt={nav.text} />
            <span
              className="text-sm font-semibold w-max"
              style={{ color: nav.color }}
            >
              {nav.text}
            </span>
          </NavLink>
        ))}
      </ul>
    </aside>
  );
};

SideDrawer.propTypes = {
  className: PropTypes.string,
};

export default SideDrawer;
