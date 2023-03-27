import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const TopArtists = () => {
  return (
    <div className="top_artists">
      <h1>Monthly Top Artist</h1>
      <div className="cards__container">
        <Swiper
          spaceBetween={30}
          slidesPerView={8}
          className="swiper_container"
        >
          <SwiperSlide>
            <div className="card">
              <img src="./images/first.png" alt="" />
              <p>James Arthur</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card">
              <img src="./images/first.png" alt="" />
              <p>Jon Bellion</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card">
              <img src="./images/first.png" alt="" />
              <p>Jon Bellion</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card">
              <img src="./images/first.png" alt="" />
              <p>Jon Bellion</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card">
              <img src="./images/first.png" alt="" />
              <p>Jon Bellion</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card">
              <img src="./images/first.png" alt="" />
              <p>Jon Bellion</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card">
              <img src="./images/first.png" alt="" />
              <p>Jon Bellion</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card">
              <img src="./images/first.png" alt="" />
              <p>Jon Bellion</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card">
              <img src="./images/first.png" alt="" />
              <p>Jon Bellion</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card">
              <img src="./images/first.png" alt="" />
              <p>Jon Bellion</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card">
              <img src="./images/first.png" alt="" />
              <p>Jon Bellion</p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default TopArtists;
