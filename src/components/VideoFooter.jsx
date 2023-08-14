import React from "react";
import "../Css/VideoFooter.css";

import { Button, Avatar } from "@mui/material";
import { MusicNote } from "@mui/icons-material";

import Ticker from "react-ticker";

import ModeCommentIcon from "@mui/icons-material/ModeComment";
import FavoriteIcon from "@mui/icons-material/Favorite";
import SendIcon from "@mui/icons-material/Send";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

function VideoFooter({ channel, song, likes, shares, avatarSrc }) {
  return (
    <div className="videoFooter">
      <div className="videoFooter__text">
        <Avatar src={avatarSrc} />

        <h3>
          {channel} ● <Button>Follow</Button>
        </h3>
      </div>

      <div className="videoFooter__ticker">
        <MusicNote className="videoFooter__icone" />
        <Ticker mode="smooth">
          {({ index }) => (
            <>
              <h3>{song}</h3>
            </>
          )}
        </Ticker>
      </div>
      <div className="videoFooter__actions">
        <div className="videoFooter__actionsLeft">
          <FavoriteIcon fontSize="large" />
          <ModeCommentIcon fontSize="large" />
          <SendIcon fontSize="large" />
          <MoreHorizIcon fontSize="large" />
        </div>
        <div className="videoFooter__actionsRight">
          <div className="videoFooter__stat">
            <FavoriteIcon />
            <p>{900}</p>
          </div>
          <div className="videoFooter__stat">
            <ModeCommentIcon />
            <p>{300}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoFooter;
