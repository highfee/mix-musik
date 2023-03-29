import { FaPlay } from "react-icons/fa";

const TrackCard = ({ song }) => {
  return (
    <div className="track_card">
      <div>
        <img src={song.imgUrl} alt="" />
        <div className="track_overlay">
          <FaPlay size={22} />
        </div>
      </div>
      <div className="track_details">
        <p>{song.artist}</p>
        <p>{song.tiaie}</p>
      </div>
    </div>
  );
};

export default TrackCard;
