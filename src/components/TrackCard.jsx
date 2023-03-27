const TrackCard = ({ song }) => {
  return (
    <div className="track_card">
      <div>
        <img src={song.imgUrl} alt="" />
      </div>
      <div className="track_details">
        <p>{song.artist}</p>
        <p>{song.title}</p>
      </div>
    </div>
  );
};

export default TrackCard;
