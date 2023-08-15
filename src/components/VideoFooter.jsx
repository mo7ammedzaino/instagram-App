import "../Css/VideoFooter.css";

import { Button, Avatar } from "@mui/material";
import { MusicNote } from "@mui/icons-material";

import Ticker from "react-ticker";
import { ModeComment, Favorite, Send, MoreHoriz } from "@mui/icons-material";

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
          <Favorite fontSize="large" />
          <ModeComment fontSize="large" />
          <Send fontSize="large" />
          <MoreHoriz fontSize="large" />
        </div>
        <div className="videoFooter__actionsRight">
          <div className="videoFooter__stat">
            <Favorite />
            <p>{900}</p>
          </div>
          <div className="videoFooter__stat">
            <ModeComment />
            <p>{300}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoFooter;
