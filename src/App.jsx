import "./Css/App.css";
import VideoCard from "./components/VideoCard";
function App(peops) {
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

        {/* image at top - logo */}
        {/* Reels text */}
      </div>

      <div className="app__videos">
        {/* Container of app_videos (scrollable 
          container)*/}

        <VideoCard
          channel="clevermohammed"
          avatarSrc="https://avatars.githubusercontent.com/u/102724971?s=400&u=7af027e2e565b204d9f7518f124a594018484301&v=4"
          song="Test song ---assa"
          url="/public/assets/reels.mp4"
          likes={950}
          shares={30}
        />
        <VideoCard />
        <VideoCard />
        <VideoCard />

        {/* <Vedio/>*/}
        {/* <Vedio/>*/}
        {/* <Vedio/>*/}
        {/* <Vedio/>*/}
      </div>
    </div>
  );
}

export default App;
