import { useEffect, useState } from "react";
import "./Css/App.css";
import VideoCard from "./components/VideoCard";
import { reelsRef } from "./firebase";
import { getDocs } from "firebase/firestore";

function App(peops) {
  const [reels, setReels] = useState([]);

  useEffect(() => {
    getDocs(reelsRef)
      .then((res) => {
        const docs = res.docs.map((doc) => ({
          id: doc.id,
          isPlaying: false,
          ...doc.data(),
        }));

        setReels(docs);
      })
      .catch((err) => {
        console.log("ERR:", err);
      });
  }, []);

  const onVideoClick = (reelId) => {
    setReels(
      reels.map((reel) => ({
        ...reel,
        isPlaying: reel.id === reelId ? !reel.isPlaying : false,
      }))
    );
  };

  return (
    <div className="app">
      <h1>Hey Clever Programmer, Let's build an IG Reels Clone 🚀!</h1>

      <div className="app__top">
        <img
          className="app__logo"
          src="https://www.logo.wine/a/logo/Instagram/Instagram-Logo.wine.svg"
          alt=""
        />
        <h1>reels</h1>
        <h2 className="app__rights">
          Made With ❤️ By{" "}
          <a href="https://twitter.com/MohammedZaino21" target="__blank">
            MohammedZaino21.
          </a>
        </h2>
      </div>

      <div className="app__videos">
        {reels.map(
          ({ id, isPlaying, channel, avatarSrc, song, url, likes, shares }) => (
            <VideoCard
              key={id}
              channel={channel}
              avatarSrc={avatarSrc}
              song={song}
              url={url}
              likes={likes}
              shares={shares}
              isPlaying={isPlaying}
              onVideoClick={() => onVideoClick(id)}
            />
          )
        )}
      </div>
    </div>
  );
}

export default App;
