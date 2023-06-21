import "./App.scss";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="player"></div>
      <main>
        <div className="left">
          <div className="video-details"></div>
          <div className="video-form"></div>
          <div className="video-comments"></div>
        </div>
        <div className="right">
          <h3>title</h3>
          <div className="card"></div>
          <div className="card"></div>
          <div className="card"></div>
        </div>
      </main>
    </div>
  );
}

export default App;
