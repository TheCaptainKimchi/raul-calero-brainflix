import "./App.scss";
import Header from "./components/Header/Header";
import Player from "./components/Player/Player";
import Main from "./components/Main/Main";

function App() {
  return (
    <div className="App">
      <Header />
      <Player />
      <Main />
      <main>
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
