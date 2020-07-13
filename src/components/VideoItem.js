import React from "react";

const VideoItem = (props) => {
  return (
    <div className="item">
      <img
        className="ui image"
        src={props.video.snippet.thumbnails.medium.url}
        alt={""}
      />
      <div className="content">
        <div className="header">{props.video.snippet.title}</div>
      </div>
    </div>
  );
};
export default VideoItem;
