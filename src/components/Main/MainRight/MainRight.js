import "../../../styles/MainRight.scss";

function MainRight(props) {
  // console.log(props);
  const filteredVideos = props.Videos.filter((video) => {
    return video.id !== props.VideoDetails.id;
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
                  props.clickHandler(Videos);
                }}
              >
                <img
                  className="videos__container-card-image"
                  src={Videos.image}
                ></img>
                <div className="videos__container-card-text">
                  <h3>{Videos.title}</h3>
                  <p>{Videos.channel}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
export default MainRight;
