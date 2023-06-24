import "../../styles/Player.scss";

function Player(props) {
  console.log(props);
  return (
    <div className="player">
      <video poster={props.VideoDetails.image} controls></video>
    </div>
  );
}

export default Player;
