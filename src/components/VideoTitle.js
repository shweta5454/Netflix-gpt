import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-6  md:px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-1xl md:text-6xl font-bold">{title}</h1>
      <p className="hidden md:inline-block py-6 text-lg w-1/4">{overview}</p>
      <div className="my-2 md:my-0">
        <button className=" bg-white hover:bg-opacity-80 md:hover:bg-opacity-80  py-1 md:py-4 px-3 md:px-12 text-xs md:text-xl text-red-700 font-bold  rounded">
          ▶ Play
        </button>
        <button className="hidden md:inline-block bg-gray-600  hover:bg-opacity-80 mx-2 p-4 px-12 text-xl text-white  bg-opacity-50 rounded">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
