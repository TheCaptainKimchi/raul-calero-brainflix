import "./Player.scss";
import { useState, useEffect } from "react";

function Player({ ApiDetails }) {
  const [imageURL, setImageURL] = useState("");

  useEffect(() => {
    setImageURL(ApiDetails.image);
  }, [ApiDetails.image]);

  return (
    <div className="player">
      <video
        poster={`http://localhost:8080/images/${imageURL}`}
        controls
      ></video>
    </div>
  );
}

export default Player;
