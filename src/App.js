import "./App.scss";
import { useState } from "react";
import Header from "./components/Header/Header";
import Player from "./components/Player/Player";
import Main from "./components/Main/Main";

import VideoDetails from "./data/video-details.json";
import Videos from "./data/videos.json";

function App() {
  const [videoList, setvideoList] = useState(Videos);
  const [videoInfo, setvideoInfo] = useState(VideoDetails[0]);

  const clickHandler = (Videos) => {
    setvideoInfo(Videos);
  };
  return (
    <div className="App">
      <Header />
      <Player VideoDetails={videoInfo} />
      <Main
        VideoDetails={videoInfo}
        Videos={videoList}
        clickHandler={clickHandler}
      />
    </div>
  );
}

export default App;
