import { useEffect, useRef } from "react";

const Audio = ({
  currentSong,
  isPlaying,
  loop,
  volume,
  onLoaded,
  onTimeUpdate,
  seekTime,
  handleNextSong,
  setIsPlaying,
}) => {
  const player = useRef(null);

  if (player.current) {
    if (isPlaying) {
      player.current.play();
    } else {
      player.current.pause();
    }
  }

  useEffect(() => {
    player.current.volume = volume;
  }, [volume]);

  useEffect(() => {
    player.current.currentTime = seekTime;
  }, [seekTime]);

  const handleKeyEvent = (e) => {
    if (e.code == "Space") {
      setIsPlaying(!isPlaying);
    }
  };

  useEffect(() => {
    window.addEventListener("keypress", handleKeyEvent);
  }, [isPlaying]);

  return (
    <div>
      <audio
        src={currentSong.songUrl}
        ref={player}
        loop={loop}
        onLoadedData={onLoaded}
        onTimeUpdate={onTimeUpdate}
        onEnded={handleNextSong}
      ></audio>
    </div>
  );
};

export default Audio;
