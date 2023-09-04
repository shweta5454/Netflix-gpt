import { useEffect } from "react";

import { TRAILOR_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/moviesSlice";

//fetch trailor video & updating the store with trailor video data
const useMovieTrailer = (movieid) => {
  //Always hooks on top
  const dispatch = useDispatch();
  const getMovieVideos = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieid}/videos?language=en-US`,
      TRAILOR_OPTIONS
    );
    const json = await data.json();
    const filtereddata = json.results.filter(
      (video) => video.type == "Trailer"
    );
    const trailer = filtereddata.length ? filtereddata[0] : json.results[0];
    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    getMovieVideos();
  }, []);
};

export default useMovieTrailer;
