import React from "react";
import {vid} from "../assets/images"

function VideoPlayer() {
  return (
      <div className=" flex w-full justify-center my-[20px] bg-[#ff5631] ">
      <video src={vid} autoPlay muted loop className=" h-[45vh] " />
      </div>
  );
}

export default VideoPlayer;
