import LeftDetails from "./LeftDetails/LeftDetails";
import LeftForm from "./LeftForm/LeftForm";
import LeftComments from "./LeftComments/LeftComments";
import "../../../styles/MainLeft.scss";

function MainLeft(props) {
  return (
    <div className="main__left">
      <div className="main__left-details"></div>
      <LeftDetails VideoDetails={props.VideoDetails} />
      <LeftForm VideoDetails={props.VideoDetails} />
      <LeftComments VideoDetails={props.VideoDetails} />
    </div>
  );
}

export default MainLeft;
