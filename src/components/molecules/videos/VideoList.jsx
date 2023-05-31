import React from "react"
import VideoCard from "../../atoms/videos/VideoCard";
import VideosData from '../../../data/videos.json';

const VideoList = () => {
  return (
    <div className="w-full flex flex-row flex-wrap justify-center" style={{ maxWidth: 1000 }}>
      {VideosData.recommend.map(video => (
        <VideoCard key={video.id} {...video} />
      ))}
    </div>
  )
}
export default VideoList;