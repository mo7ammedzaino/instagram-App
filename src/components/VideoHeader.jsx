import React from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import CameraAltOutlinedIcon from "@mui/icons-material/CameraAltOutlined";
import "../Css/VideoHeader.css";
function VideoHeader() {
  return (
    <div className="video-card__header">
      <ArrowBackIosIcon />
      <h1>Reels</h1>
      <CameraAltOutlinedIcon />
    </div>
  );
}

export default VideoHeader;
