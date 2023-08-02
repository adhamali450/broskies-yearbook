import PropTypes from "prop-types";
import membersIcons from "@icons/members";
import MiniImage from "@components/MiniImage";
// import { NavLink } from "react-router-dom";
import "./Members.scss";
const MembersGrid = ({ members }) => {
  return (
    <div className="class">
      {members.map((member, index) => (
        <div
          className="realtive flex flex-col justify-center text-center items-center w-fit"
          key={index}
        >
          <MiniImage
            className="w-[100px] h-[100px] rounded-xl"
            src={member.face}
            verticlPosition="center"
          />
          <h1 className="text-sm mt-2">{member.name}</h1>
        </div>
      ))}
    </div>
  );
};

const Header = ({ title, icon }) => {
  return (
    <div className="flex gap-2 items-center mr-5">
      <h1 className="text-2xl font-semibold text-[#ffffff] ">{title}</h1>
      <img className="w-10 h-10" src={icon} alt={title} />
    </div>
  );
};

const MembersPage = ({ members }) => {
  return (
    <div className="relative container h-full flex flex-col">
      <div className="-z-10 absolute bg-[#FFAEDF] w-[40%] h-[40%] translate-x-1/2 right-0 rounded-[100%] blur-3xl opacity-20"></div>
      <div className="py-8 px-6">
        <Header title="أعمداء" icon={membersIcons.column} />
        <MembersGrid members={members.filter((m) => m.role === "عمود")} />
        <Header title="أعضاء" icon={membersIcons.members} />
        <MembersGrid members={members.filter((m) => m.role === "عضو")} />
        <Header title="مستجدين" icon={membersIcons.baby} />
        <MembersGrid members={members.filter((m) => m.role === "مستجد")} />
        <Header title="أصنام" icon={membersIcons.moai} />
        <MembersGrid members={members.filter((m) => m.role === "صنم")} />
      </div>
    </div>
  );
};

// /* MembersGrid.propTypes = {
//   members: PropTypes.array.isRequired,
// };

// TODO: modify
Header.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,
};

MembersPage.propTypes = {
  members: PropTypes.array.isRequired,
};

export default MembersPage;
