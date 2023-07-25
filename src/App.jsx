import { Route, Routes } from "react-router";
import HomePage from "@pages/HomePage";
import MembersPage from "@pages/MembersPage";
import GalleryPage from "@pages/GalleryPage";
import LeaderboardPage from "@pages/LeaderboardPage";

import "./App.sass";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/members" element={<MembersPage />} />
      <Route path="/gallery" element={<GalleryPage />} />
      <Route path="/leaderboard" element={<LeaderboardPage />} />
    </Routes>
  );
}

export default App;
