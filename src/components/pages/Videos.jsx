import React from "react"
import ContentLayout from "../layouts/CotentLayout";
import VideoList from "../molecules/videos/VideoList";

const Videos = () => {
  return (
    <ContentLayout>
      <div className="mt-5 flex justify-center">
        <VideoList />
      </div>
    </ContentLayout>
  )
}

export default Videos;