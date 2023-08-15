import React, { useEffect, useRef } from "react";

function Video({ url, isPlaying, onVideoClick }) {
  const videoRef = useRef(null);

  useEffect(() => {
    if (isPlaying) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  }, [isPlaying]);

  return (
    <video
      ref={videoRef}
      onClick={onVideoClick}
      className="video-card__video"
      src={url}
      alt="IG reel video"
      loop
    />
  );
}

export default Video;
