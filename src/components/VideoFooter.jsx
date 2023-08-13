import React from "react";
import "../Css/VideoFooter.css";
import { Button, Avatar } from "@mui/material";
import { MusicNote } from "@mui/icons-material";
import Ticker from "react-ticker";

function VideoFooter({ likes, shares, channel, song, avatarSrc }) {
  return (
    <div className="videoFooter">
      <div className="videoFooter__text">
        <Avatar src={avatarSrc} />
        <h3>
          {channel} ● <Button>Follow</Button>
        </h3>
      </div>
      <div className="videoFooter__ticker">
        <MusicNote className="icone" />
        <Ticker mode="smooth">
          {({ index }) => (
            <>
              <h3>{song}</h3>
            </>
          )}
        </Ticker>
      </div>
    </div>
  );
}

export default VideoFooter;
