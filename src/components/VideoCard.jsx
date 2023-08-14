import "../Css/VideoCard.css";
import VideoHeader from "./VideoHeader";
import VideoFooter from "./VideoFooter";
import Video from "./Video";

function VideoCard({ url, likes, shares, channel, song, avatarSrc }) {
  return (
    <div className="videoCard">
      <VideoHeader />

      <Video url={url} />

      <VideoFooter
        channel={channel}
        likes={likes}
        shares={shares}
        avatarSrc={avatarSrc}
        song={song}
      />
    </div>
  );
}

export default VideoCard;
