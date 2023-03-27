import { Link } from "react-router-dom";

const Track = ({ currentSong }) => {
  return (
    <div className="track">
      <div>
        <img src={currentSong.imgUrl} alt="" />
        <div>
          <p className="title">{currentSong.artist}</p>
          <p className="subtitle">
            <Link to={`/song/${currentSong.id}`}>{currentSong.title}</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Track;
