import MainLeft from "./MainLeft/MainLeft";
import MainRight from "./MainRight/MainRight";
import "../../styles/Main.scss";

function Main(props) {
  return (
    <main className="main">
      <MainLeft VideoDetails={props.VideoDetails} />
      <MainRight
        Videos={props.Videos}
        clickHandler={props.clickHandler}
        VideoDetails={props.VideoDetails}
      />
    </main>
  );
}

export default Main;
