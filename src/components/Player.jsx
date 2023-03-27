import { useState } from "react";
import Audio from "./Audio";
import Controls from "./Controls";
import Track from "./Track";
import Volume from "./Volume";

const Player = ({ currentSong, currentIndex, setCurrentIndex, allSongs }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [loop, setLoop] = useState(false);
  const [shuffle, setShuffle] = useState(false);
  const [volume, setVolume] = useState(1);
  const [duration, setDuration] = useState(0);
  const [seekTime, setSeekTime] = useState(0);
  const [appTime, setAppTime] = useState(0);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleRepeat = () => {
    setLoop(!loop);
  };

  const handleNextSong = () => {
    if (shuffle) {
      setCurrentIndex(Math.floor(Math.random() * allSongs.length));
      return;
    }
    if (currentIndex == allSongs.length - 1) {
      setCurrentIndex(0);
      return;
    }
    setCurrentIndex(currentIndex + 1);
  };

  const handleShuffle = () => {
    setShuffle(!shuffle);
  };

  const handlePrevSong = () => {
    if (shuffle) {
      setCurrentIndex(Math.floor(Math.random() * allSongs.length));
      return;
    }
    if (currentIndex == 0) {
      setCurrentIndex(allSongs.length - 1);
      return;
    }
    setCurrentIndex(currentIndex - 1);
  };

  return (
    <div className="player">
      <Track currentSong={currentSong} />
      <Controls
        isPlaying={isPlaying}
        handlePlayPause={handlePlayPause}
        handleRepeat={handleRepeat}
        loop={loop}
        handleNextSong={handleNextSong}
        handlePrevSong={handlePrevSong}
        handleShuffle={handleShuffle}
        shuffle={shuffle}
        seekTime={seekTime}
        appTime={appTime}
        duration={duration}
        setAppTime={setAppTime}
        setSeekTime={setSeekTime}
      />
      <Volume
        onchange={(e) => {
          setVolume(e.target.value);
        }}
      />
      <Audio
        currentSong={currentSong}
        isPlaying={isPlaying}
        loop={loop}
        volume={volume}
        onLoaded={(e) => {
          setDuration(e.target.duration);
          e.target.play();
        }}
        onTimeUpdate={(e) => {
          setAppTime(e.target.currentTime);
        }}
        seekTime={seekTime}
        handleNextSong={handleNextSong}
        setIsPlaying={setIsPlaying}
      />
    </div>
  );
};

export default Player;
