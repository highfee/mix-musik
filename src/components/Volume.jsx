import { FaVolumeUp, FaRegSun } from "react-icons/fa";

const Volume = ({ onchange }) => {
  return (
    <div className="volume">
      <div className="left">
        <FaVolumeUp fill="white" />
        <input type="range" min={0} max={1} step="any" onChange={onchange} />
      </div>
      <div>
        <FaRegSun fill="white" />
      </div>
    </div>
  );
};

export default Volume;
