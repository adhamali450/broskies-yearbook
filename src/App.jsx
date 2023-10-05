import { Fragment } from "react";
import { Route, Routes } from "react-router";
import HomePage from "@pages/HomePage";
import MembersPage from "@pages/MembersPage";
import GalleryPage from "@pages/GalleryPage";
import LeaderboardPage from "@pages/LeaderboardPage";
import TechnicalIssuePage from "@pages/TechnicalIssuePage";
import SideDrawer from "@components/SideDrawer";

import { details, gallery } from "@assets/data";

import "./App.sass";

function App() {
  details.sort((a, b) => b.rating - a.rating);

  const members = details.map((member) => {
    return {
      id: member.id,
      name: member.name,
      face: member.face,
      role: member.role,
    };
  });

  const leaderboardDetails = details.map((member) => {
    return {
      name: member.name,
      rating: member.rating,
      points: member.points,
      face: member.face,
    };
  });

  const technicalIssue = false;
  return (
    <div className="relative App flex flex-col md:flex-row">
      {(technicalIssue && <TechnicalIssuePage />) || (
        <Fragment>
          <SideDrawer className="fixed z-50 md:py-8 bg-[#333333] md:bg-[#3333338a] w-[100vw] h-auto md:w-auto md:h-[100vh]" />

          <div className="relative wrapper w-full  h-[calc(100vh-64px)] md:h-[100vh] mt-[64px] md:mt-0 md:mr-[95px] xmd:mr-[140px]">
            <Routes>
              <Route path="/" element={<HomePage details={details} />} />
              <Route
                path="/members"
                element={<MembersPage members={members} />}
              />
              <Route
                path="/gallery"
                element={<GalleryPage images={gallery} />}
              />
              <Route
                path="/leaderboard"
                element={
                  <LeaderboardPage leaderboardDetails={leaderboardDetails} />
                }
              />
            </Routes>
          </div>
        </Fragment>
      )}
    </div>
  );
}

export default App;
