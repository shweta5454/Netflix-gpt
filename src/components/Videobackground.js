import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const Videobackground = ({ movieid }) => {
  const trailer = useSelector((store) => store.movies?.trailorVideo);
  useMovieTrailer(movieid);

  return (
    <div className=" ">
      <iframe
        className="w-screen aspect-video"
        src={"https://www.youtube.com/embed/" + trailer?.key+"?&autoplay=1&mute=1"}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default Videobackground;
