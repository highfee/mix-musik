import {
  FaBell,
  FaSistrix,
  FaAngleDown,
  FaHeart,
  FaPlay,
  FaShareAlt,
  FaRandom,
} from "react-icons/fa";

const Hero = () => {
  return (
    <div className="hero">
      {/* left side start */}
      <div className="left">
        <div className="search">
          <FaSistrix fill="white" size={20} />
          <input type="text" placeholder="Search" />
        </div>
        <h1>DREAM TOP SIX TRAIN</h1>
        <div className="cta">
          <p>
            <span>
              <FaPlay fill="#ddd" />
            </span>
            Play all
          </p>
          <p>
            <span>
              <FaRandom fill="#333" />
            </span>
            Mix
          </p>
        </div>
      </div>
      {/* left side end */}

      {/* middle start */}
      <div className="middle">
        <img src="./images/first.png" alt="" />
      </div>
      {/* middle ends */}

      {/* right start */}
      <div className="right">
        <div className="top">
          <FaBell fill="white" size={20} />
          <div>
            <img src="./images/profile.jpg" alt="" />
            <FaAngleDown fill="white" size={20} />
          </div>
        </div>
        <div className="bottom">
          <div>
            <FaHeart fill="white" />
          </div>
          <div>
            <FaShareAlt fill="white" />
          </div>
        </div>
      </div>
      {/* right ends */}
    </div>
  );
};

export default Hero;
