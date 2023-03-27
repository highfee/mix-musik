import TrackCard from "./TrackCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

const Tracks = ({ allSongs }) => {
  return (
    <div className="tracks">
      <div>
        <h1>Weekly top Charts</h1>
      </div>
      <Swiper
        slidesPerView={8}
        modules={[Navigation]}
        navigation
        spaceBetween={150}
        className="swiper"
      >
        {allSongs.map((song) => (
          <SwiperSlide>
            <TrackCard song={song} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Tracks;
