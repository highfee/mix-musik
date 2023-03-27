import React from "react";
import Charts from "./Charts";
import Hero from "./Hero";
import Tracks from "./Tracks";

const Main = ({ allSongs }) => {
  return (
    <div className="right">
      <Hero />
      <Tracks allSongs={allSongs} />
      <Charts />
    </div>
  );
};

export default Main;
