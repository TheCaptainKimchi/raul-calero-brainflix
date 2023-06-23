import "./App.scss";
import Header from "./components/Header/Header";
import Player from "./components/Player/Player";
import Main from "./components/Main/Main";

import VideoDetails from "./data/video-details.json";
import Videos from "./data/videos.json";

function App() {
  return (
    <div className="App">
      <Header />
      <Player />
      <Main VideoDetails={VideoDetails} Videos={Videos} />
    </div>
  );
}

export default App;
