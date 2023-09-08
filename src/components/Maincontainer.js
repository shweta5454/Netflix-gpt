import React from "react";
import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector";

import Videobackground from "../components/Videobackground";
import VideoTitle from "../components/VideoTitle";

const Maincontainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingmovies);
  if (!movies) return;
  const mainmovie = movies[0];
  const { original_title, overview, id } = mainmovie;
  return (
    <div className="pt-[35%]  md:pt-0  ">
      <VideoTitle title={original_title} overview={overview} />
      <Videobackground movieid={id} />
    </div>
  );
};

export default Maincontainer;
