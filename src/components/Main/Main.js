import MainLeft from "./MainLeft/MainLeft";
import MainRight from "./MainRight/MainRight";

function Main(props) {
  return (
    <main>
      <MainLeft />
      <MainRight Videos={props.Videos} />
    </main>
  );
}

export default Main;
