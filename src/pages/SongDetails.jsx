import "../songDetails.scss";
import { FaPlay } from "react-icons/fa";
import SongLyrics from "../components/SongLyrics";
import RelatedSongs from "../components/RelatedSongs";
import { songs } from "../assets/songs";

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const SongDetails = () => {
  const { id } = useParams();
  const [song, setSong] = useState(songs[id - 1]);

  return (
    <div className="song">
      <header>Header</header>
      <section className="song__summary">
        <div>
          <img src={song.imgUrl} alt="" />
        </div>
        <div>
          <h1>{song.title}</h1>
          <small>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque
            porro perferendis quasi, asperiores earum consequatur eveniet ab
            ratione commodi culpa!
          </small>
          <section className="ctas">
            <div>
              <FaPlay />
              <p>Play all</p>
            </div>
            <div>
              <FaPlay />
              <p>Add to collections</p>
            </div>
          </section>
        </div>
      </section>
      <div className="bottom">
        <SongLyrics />
        <RelatedSongs />
      </div>
    </div>
  );
};

export default SongDetails;
