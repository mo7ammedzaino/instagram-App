import React, { useRef, useState } from "react";

function Video({ url }) {
  /* ############ */

  //useState
  //useRef : stop & play

  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const videoRef = useRef(null);

  const onVideoPress = () => {
    if (isVideoPlaying) {
      // stop

      videoRef.current.pause();
      setIsVideoPlaying(false);
    } else {
      // play

      videoRef.current.play();
      setIsVideoPlaying(true);
    }
  };

  return (
    <video
      onClick={onVideoPress}
      className="video-card__video"
      src={url}
      alt="IG reel video"
      loop
    />
  );
}

export default Video;
