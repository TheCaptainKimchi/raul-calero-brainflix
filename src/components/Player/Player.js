import "../../styles/Player.scss";

function Player(props) {
  return (
    <div className="player">
      <video poster={props.ApiDetails.image} controls></video>
    </div>
  );
}

export default Player;
