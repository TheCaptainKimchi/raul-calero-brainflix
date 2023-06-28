import "./App.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import Header from "./components/Header/Header";
import Player from "./components/Player/Player";
import Main from "./components/Main/Main";

import VideoDetails from "./data/video-details.json";
import Videos from "./data/videos.json";

function App() {
  const apiKey = "d2d7858f-a0fa-45aa-b09c-21ca5bcc6c18";

  const [videoList, setvideoList] = useState(Videos);
  const [videoInfo, setvideoInfo] = useState(VideoDetails[0]);

  const [apiList, setApiList] = useState(null);
  const [apiId, setVideoId] = useState(null);

  useEffect(() => {
    console.log("Use effect setting state..");
    axios
      .get(`https://project-2-api.herokuapp.com/videos?api_key=${apiKey}`)
      .then((response) => {
        setApiList(response.data);
        console.log(videoInfo);
      });
  }, []);

  const clickHandler = (video) => {
    const selectedVideoDetails = VideoDetails.find(
      (videoDetail) => videoDetail.id === video.id
    );
    setvideoInfo(selectedVideoDetails);
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
