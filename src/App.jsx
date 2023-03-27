import Main from "./components/Main";
import Player from "./components/Player";
import Sidebar from "./components/Sidebar";
import { songs } from "./assets/songs";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SongDetails from "./pages/SongDetails";

const App = () => {
  const [allSongs, setAllSongs] = useState(songs);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentSong, setCurrentSong] = useState(allSongs[currentIndex]);

  useEffect(() => {
    setCurrentSong(allSongs[currentIndex]);
  }, [currentIndex]);

  return (
    <Router>
      <div className="container">
        <main>
          <Sidebar />
          <Routes>
            <Route path="/" element={<Main allSongs={allSongs} />} />
            <Route path="/song/:id" element={<SongDetails />} />
          </Routes>

          {/* <Outlet /> */}
          <Player
            currentSong={currentSong}
            currentIndex={currentIndex}
            setCurrentIndex={setCurrentIndex}
            allSongs={allSongs}
          />
        </main>
      </div>
    </Router>
  );
};

export default App;
