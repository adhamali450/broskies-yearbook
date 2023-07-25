import SideDrawer from "@components/SideDrawer";

const MembersPage = () => {
  return (
    <div className="wrapper h-[100vh] flex items-center">
      <SideDrawer className="py-8 bg-[#333333]" />
      <div className="container w-[90%] h-full mx-auto"></div>
    </div>
  );
};

export default MembersPage;
