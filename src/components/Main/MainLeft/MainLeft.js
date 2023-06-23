import LeftDetails from "./LeftDetails/LeftDetails";
import LeftForm from "./LeftForm/LeftForm";
import LeftComments from "./LeftComments/LeftComments";

function MainLeft() {
  return (
    <div className="main__left">
      <div className="main__left-details"></div>
      <LeftDetails />
      <LeftForm />
      <LeftComments />
    </div>
  );
}

export default MainLeft;
