import { useEffect, useState } from "react";
import "./Css/App.css";
import VideoCard from "./components/VideoCard";
import db from "./firebase";
import { onSnapshot } from "firebase/firestore";

function App(peops) {
  const [reels, setReels] = useState([]);
  useEffect(() => {
    // App Component will run ONCE when it loads
    db.collection("reels").onSnapshot((snapshot) =>
      setReels(snapshot.doc.map((doc) => doc.data()))
    );
  }, []);
  return (
    // BEM naming convention

    <div className="app">
      <h1>Hey Clever Programmer, Let's build an IG Reels Clone 🚀!</h1>

      <div className="app__top">
        <img
          className="app__logo"
          src="https://www.logo.wine/a/logo/Instagram/Instagram-Logo.wine.svg"
          alt=""
        />
        <h1>reels</h1>
      </div>

      <div className="app__videos">
        {reels.map(({ channel, avatarSrc, song, url, likes, shares }) => (
          <VideoCard
            channel={channel}
            avatarSrc={avatarSrc}
            song={song}
            url={url}
            likes={likes}
            shares={shares}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
