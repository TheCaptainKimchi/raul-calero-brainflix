import LeftDetails from "./LeftDetails/LeftDetails";
import LeftForm from "./LeftForm/LeftForm";
import LeftComments from "./LeftComments/LeftComments";
import "./MainLeft.scss";

function MainLeft({ VideoDetails }) {
  return (
    <div className="main__left">
      <div className="main__left-details"></div>
      <LeftDetails VideoDetails={VideoDetails} />
      <LeftForm VideoDetails={VideoDetails} />
      <LeftComments VideoDetails={VideoDetails} />
    </div>
  );
}

export default MainLeft;
