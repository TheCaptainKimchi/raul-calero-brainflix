import "./MainRight.scss";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

function MainRight({ Videos, clickHandler, VideoDetails }) {
  const { videoId } = useParams();

  const filteredVideos = Videos.filter((video) => {
    return video.id !== VideoDetails.id;
  });

  return (
    <div className="videos">
      <h3 className="videos__title">NEXT VIDEOS</h3>
      <div className="videos__container">
        <ul className="videos__container-card">
          {filteredVideos.map((Videos) => {
            return (
              <li
                key={Videos.id}
                onClick={() => {
                  clickHandler(Videos);
                }}
              >
                <Link to={`/videos/${videoId}`}>
                  <img
                    className="videos__container-card-image"
                    src={`http://localhost:8080/images/${Videos.image}`}
                    alt="video-thumbnail"
                  ></img>
                  <div className="videos__container-card-text">
                    <h3>{Videos.title}</h3>
                    <p>{Videos.channel}</p>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
export default MainRight;
