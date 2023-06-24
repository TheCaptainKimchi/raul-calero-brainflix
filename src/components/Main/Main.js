import MainLeft from "./MainLeft/MainLeft";
import MainRight from "./MainRight/MainRight";

function Main(props) {
  return (
    <main>
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
