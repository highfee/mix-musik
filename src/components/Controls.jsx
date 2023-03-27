import { useState } from "react";
import {
  FaPause,
  FaRandom,
  FaStepBackward,
  FaStepForward,
  FaSyncAlt,
  FaPlay,
  FaSync,
} from "react-icons/fa";

const Controls = ({
  isPlaying,
  handlePlayPause,
  handleRepeat,
  loop,
  handleNextSong,
  handlePrevSong,
  handleShuffle,
  shuffle,
  seekTime,
  duration,
  appTime,
  setSeekTime,
  setAppTime,
}) => {
  return (
    <div className="controls">
      <div className="icons">
        <div
          onClick={handleRepeat}
          className={loop ? "controlsActive" : undefined}
        >
          <FaSyncAlt fill="white" size={22} />
        </div>
        <FaStepBackward fill="white" size={22} onClick={handlePrevSong} />
        <div onClick={handlePlayPause}>
          {isPlaying ? (
            <FaPause fill="white" size={22} />
          ) : (
            <FaPlay fill="white" size={22} />
          )}
        </div>

        <FaStepForward fill="white" size={22} onClick={handleNextSong} />

        <div
          onClick={handleShuffle}
          className={shuffle ? "controlsActive" : undefined}
        >
          <FaRandom fill="white" size={22} />
        </div>
      </div>
      <Seekbar
        seekTime={seekTime}
        duration={duration}
        appTime={appTime}
        // onChange={onChange}
        setAppTime={setAppTime}
        setSeekTime={setSeekTime}
      />
    </div>
  );
};

function Seekbar({ duration, appTime, setAppTime, setSeekTime }) {
  // const [time, setTime] = useState(value);
  return (
    <div className="seekbar">
      <p>{(appTime / 60).toFixed(2)}</p>
      <input
        type="range"
        step="any"
        min={0}
        max={duration}
        value={appTime}
        onChange={(e) => {
          setAppTime(e.target.value);
          setSeekTime(e.target.value);
        }}
      />
      <p>{(duration / 60).toFixed(2)}</p>
    </div>
  );
}

export default Controls;
