import "../artistDetails.scss";
import { FaEllipsisV, FaHeartbeat } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import TrackCard from "../components/TrackCard";

import "swiper/css";

import { songs } from "../assets/songs";

const ArtistDetails = () => {
  return (
    <div className="artist_container">
      <div className="artist_profile">
        <h1>Alan Walker</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
          cum quidem earum rem animi. Sint animi doloremque fuga quibusdam omnis
          facere quaerat id ratione, reiciendis, asperiores ut rem, ullam nobis
          totam doloribus quisquam
        </p>
        <div className="cta">
          <button>Electronic</button>
          <button>Classical</button>
        </div>
      </div>
      <div className="top_songs">
        <h1>Top Songs</h1>
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
      <div className="artist_album">
        <h1>Album</h1>
        <Swiper slidesPerView={6} spaceBetween={30} className="album_swiper">
          {songs.map((song) => (
            <SwiperSlide>
              <TrackCard song={song} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ArtistDetails;
