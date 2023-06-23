import views from "../../../../assets/images/icons/views.svg";
import likes from "../../../../assets/images/icons/likes.svg";
import "../../../../styles/LeftDetails.scss";

function LeftDetails() {
  return (
    <div className="details">
      <h1 className="details__title">BMX Rampage: 2021 Highlights</h1>
      <div className="details__sub-info">
        <div className="details__left">
          <h3 className="details__left-author">By Red Crow</h3>
          <p className="details__left-date">07/11/2021</p>
        </div>
        <div className="details__right">
          <div className="details__right-views">
            <img className="details__right-views-icon" src={views}></img>
            <p className="details__right-views-text">1,001,023</p>
          </div>
          <div className="details__right-likes">
            <img className="details__right-likes-icon" src={likes}></img>
            <p className="details__right-likes-text">1,001,023</p>
          </div>
        </div>
      </div>
      <p className="details__description">
        On a gusty day in Southern Utah, a group of 25 daring mountain bikers
        blew the doors off what is possible on two wheels, unleashing some of
        the biggest moments the sport has ever seen. While mother nature only
        allowed for one full run before the conditions made it impossible to
        ride, that was all that was needed for event veteran Kyle Strait, who
        won the event for the second time -- eight years after his first Red Cow
        Rampage title
      </p>
    </div>
  );
}

export default LeftDetails;
