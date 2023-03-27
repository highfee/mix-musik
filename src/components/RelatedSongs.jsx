import { FaEllipsisV, FaHeartbeat } from "react-icons/fa";

const RelatedSongs = () => {
  return (
    <div className="related">
      <h1>Related songs</h1>
      <section>
        <div className="card">
          <div>
            <img src="../images/profile.jpg" alt="" />
            <FaHeartbeat size={20} fill="#999" />
          </div>
          <div>
            <p className="artist">Rihanna</p>
            <p className="title">Diamond</p>
          </div>
          <div>
            <FaEllipsisV />
          </div>
        </div>
      </section>
    </div>
  );
};

export default RelatedSongs;
