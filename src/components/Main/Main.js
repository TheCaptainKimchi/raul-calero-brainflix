import MainLeft from "./MainLeft/MainLeft";
import MainRight from "./MainRight/MainRight";
import "../../styles/Main.scss";

function Main({ Videos, clickHandler, ApiDetails }) {
  return (
    <main className="main">
      <MainLeft VideoDetails={ApiDetails} />
      <MainRight
        Videos={Videos}
        clickHandler={clickHandler}
        VideoDetails={ApiDetails}
      />
    </main>
  );
}

export default Main;
