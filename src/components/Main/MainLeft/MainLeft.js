import LeftDetails from "./LeftDetails/LeftDetails";
import LeftForm from "./LeftForm/LeftForm";

function MainLeft() {
  return (
    <div className="main__left">
      <div className="main__left-details"></div>
      <LeftDetails />
      <LeftForm />
      {/* <LeftComments /> */}
      {/* 
      <div className="main__left-comments"></div> */}
    </div>
  );
}

export default MainLeft;
