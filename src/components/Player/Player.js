import "./Player.scss";

function Player({ ApiDetails }) {
  return (
    <div className="player">
      <video poster={ApiDetails.image} controls></video>
    </div>
  );
}

export default Player;
