import "./App.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import Header from "./components/Header/Header";
import Player from "./components/Player/Player";
import Main from "./components/Main/Main";

function App() {
  const apiKey = "d2d7858f-a0fa-45aa-b09c-21ca5bcc6c18";

  const [videoId, setVideoId] = useState(
    "84e96018-4022-434e-80bf-000ce4cd12b8"
  );
  const [apiList, setApiList] = useState(null);
  const [apiDetails, setApiDetails] = useState(null);

  useEffect(() => {
    axios
      .get(`https://project-2-api.herokuapp.com/videos/?api_key=${apiKey}`)
      .then((response) => {
        setApiList(response.data);
      });
  }, []);

  useEffect(() => {
    axios
      .get(
        `https://project-2-api.herokuapp.com/videos/${videoId}?api_key=${apiKey}`
      )
      .then((response) => {
        setApiDetails(response.data);
      });
  }, [videoId]);

  if (!apiList) {
    return <p>Loading...</p>;
  }

  const clickHandler = (video) => {
    const selectedVideoDetails = apiList.find(
      (videoDetail) => videoDetail.id === video.id
    );
    setVideoId(selectedVideoDetails.id);
  };
  return (
    <div className="App">
      <Header />
      <Player ApiDetails={apiDetails} />
      <Main
        Videos={apiList}
        ApiDetails={apiDetails}
        clickHandler={clickHandler}
      />
    </div>
  );
}
export default App;
