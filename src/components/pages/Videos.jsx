import React from "react";
import VideoCard from "../atoms/card/VideoCard";
import List from "../molecules/List";
import VideosData from "../../data/videos.json";

const Videos = () => {
  return (
    <div className="mt-5 flex justify-center">
      <List data={VideosData.recommend} Element={VideoCard} />
    </div>
  )
}

export default Videos;