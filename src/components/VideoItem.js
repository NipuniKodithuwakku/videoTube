import React from "react";

const VideoItem = (props) => {
  return (
    <div>
      <img src={props.video.item.thumbnail.medium.url} alt={""} />
      {props.video.item.title}
    </div>
  );
};
export default VideoItem;
