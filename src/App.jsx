import Main from "./components/Main";
import Player from "./components/Player";
import Sidebar from "./components/Sidebar";
import { songs } from "./assets/songs";
import { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import SongDetails from "./pages/SongDetails";
import ArtistDetails from "./pages/ArtistDetails";
import { useSelector } from "react-redux";

const App = () => {
  const [allSongs, setAllSongs] = useState(songs);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentSong, setCurrentSong] = useState(allSongs[currentIndex]);
  const url = useSelector((state) => state.bg.url);

  useEffect(() => {
    setCurrentSong(allSongs[currentIndex]);
  }, [currentIndex]);

  const { pathname } = useLocation();
  console.log(pathname);
  const style = {
    backgroundImage:
      pathname.includes("song") || pathname.includes("artist")
        ? url
        : undefined,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };
  return (
    <div className="container">
      <main style={style}>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Main allSongs={allSongs} />} />
          <Route path="/song/:id" element={<SongDetails />} />
          <Route path="/artist" element={<ArtistDetails />} />
        </Routes>

        <Player
          currentSong={currentSong}
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
          allSongs={allSongs}
        />
        {(pathname.includes("song") || pathname.includes("artist")) && (
          <div className="overlay"></div>
        )}
      </main>
    </div>
  );
};

export default App;
