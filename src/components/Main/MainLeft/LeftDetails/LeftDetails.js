import views from "../../../../assets/images/icons/views.svg";
import likes from "../../../../assets/images/icons/likes.svg";
import "../../../../styles/LeftDetails.scss";

function LeftDetails(props) {
  const VideoDetails = props.VideoDetails;

  const date = new Date(VideoDetails.timestamp);
  const formattedDate = `${
    date.getMonth() + 1
  }/${date.getDate()}/${date.getFullYear()}`;

  return (
    <div className="details">
      <h1 className="details__title">{VideoDetails.title}</h1>
      <div className="details__sub-info">
        <div className="details__left">
          <h3 className="details__left-author">{`By ${VideoDetails.channel}`}</h3>
          <p className="details__left-date">{formattedDate}</p>
        </div>
        <div className="details__right">
          <div className="details__right-views">
            <img className="details__right-views-icon" src={views}></img>
            <p className="details__right-views-text">{VideoDetails.views}</p>
          </div>
          <div className="details__right-likes">
            <img className="details__right-likes-icon" src={likes}></img>
            <p className="details__right-likes-text">{VideoDetails.likes}</p>
          </div>
        </div>
      </div>
      <p className="details__description">{VideoDetails.description}</p>
    </div>
  );
}

export default LeftDetails;
