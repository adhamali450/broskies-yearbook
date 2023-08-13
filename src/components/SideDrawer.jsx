import PropTypes from "prop-types";

import drawerIcons from "@icons/drawer";
import { NavLink } from "react-router-dom";

import logo from "@assets/logo.svg";
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
    <aside
      className={`${className} flex md:flex-col gap-0 xmd:gap-6 items-center`}
    >
      <img
        className="w-[100px] xmd:w-[140px] p-2 xmd:p-0 "
        src={logo}
        alt="حمامة شيراتون"
      />
      <ul className="flex flex-row md:flex-col grow h-full w-full md:h-auto">
        {links.map((nav, index) => (
          <li key={index}>
            <NavLink
              to={nav.route}
              className={`nav-btn`}
              activeclassname="active"
            >
              <img className="w-8 xmd:w-12" src={nav.icon} alt={nav.text} />
              <span
                className="text-sm font-semibold w-min text-center xmd:w-max hidden md:inline"
                style={{ color: nav.color }}
              >
                {nav.text}
              </span>
            </NavLink>
          </li>
        ))}
      </ul>
    </aside>
  );
};

SideDrawer.propTypes = {
  className: PropTypes.string,
};

export default SideDrawer;
