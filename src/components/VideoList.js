import React from "react";
import VideoItem from "./VideoItem";

const VideoList = (props) => {
  const renderedVideoList = props.videos.map((video) => {
    return <VideoItem onVideoSelect={props.onVideoSelect} video={video} />;
  });
  return <div className="ui relaxed divided list">{renderedVideoList}</div>;
};

export default VideoList;
