import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setBgUrl } from "../redux/bgSlice";

const Track = ({ currentSong }) => {
  const dispatch = useDispatch();
  return (
    <div className="track">
      <div>
        <img src={currentSong.imgUrl} alt="" />
        <div>
          <p className="title">{currentSong.artist}</p>
          <p
            className="subtitle"
            onClick={() => {
              dispatch(setBgUrl(currentSong.imgUrl));
            }}
          >
            <Link to={`/song/${currentSong.id}`}>{currentSong.title}</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Track;
