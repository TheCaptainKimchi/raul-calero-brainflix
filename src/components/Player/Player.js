import "../../styles/Player.scss";

function Player() {
  return (
    <div className="player">
      <video controls>
        <source
          src="https://www.youtube.com/watch?v=lNPGXacm9c8"
          type="video/mp4"
        ></source>
      </video>
    </div>
  );
}

export default Player;
