import MainLeft from "./MainLeft/MainLeft";
import MainRight from "./MainRight/MainRight";
import Player from "../Player/Player";
import "../../styles/Main.scss";

function Main({ Videos, clickHandler, ApiDetails, VideoId }) {
  return (
    <div className="main-components">
      {ApiDetails && <Player ApiDetails={ApiDetails} />}
      <main className="main">
        {ApiDetails && <MainLeft VideoDetails={ApiDetails} />}
        {ApiDetails && Videos && (
          <MainRight
            Videos={Videos}
            clickHandler={clickHandler}
            VideoDetails={ApiDetails}
          />
        )}
      </main>
    </div>
  );
}

export default Main;
