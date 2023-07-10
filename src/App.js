import "./App.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Upload from "./pages/Page/Page";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  // const apiKey = "d2d7858f-a0fa-45aa-b09c-21ca5bcc6c18";

  const [videoId, setVideoId] = useState(
    "84e96018-4022-434e-80bf-000ce4cd12b8"
  );

  const [apiList, setApiList] = useState(null);
  const [apiDetails, setApiDetails] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/videos`)
      .then((response) => {
        setApiList(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/videos/${videoId}`)
      .then((response) => {
        setApiDetails(response.data);
      })
      .catch((error) => {
        console.log(error);
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
      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <Main
                Videos={apiList}
                VideoId={videoId}
                ApiDetails={apiDetails}
                clickHandler={clickHandler}
              />
            }
          />
          <Route
            path="videos/:videoId"
            element={
              <Main
                Videos={apiList}
                ApiDetails={apiDetails}
                VideoId={videoId}
                clickHandler={clickHandler}
              />
            }
          />
          <Route path="upload" element={<Upload />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
