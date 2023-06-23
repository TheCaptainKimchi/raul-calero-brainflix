import "../../../../styles/LeftComments.scss";

function LeftComments() {
  return (
    <div className="comments">
      <div className="comments__card">
        <div className="comments__card-left">
          <img></img>
        </div>
        <div className="comments__card-right">
          <div className="comments__card-right-top">
            <h3>Michael Lyons</h3>
            <p>08/09/2021</p>
          </div>
          <div className="comments__card-right-bottom">
            <p>
              They BLEW the ROOF off at their last event, once everyone started
              figuring out they were going. This is still simply the greatest
              opening of an event I have EVER witnessed.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftComments;
