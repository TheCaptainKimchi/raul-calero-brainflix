import "../../../styles/MainRight.scss";

function MainRight() {
  return (
    <div className="videos">
      <h3 className="videos__title">NEXT VIDEOS</h3>
      <div className="videos__container">
        <div className="videos__container-card">
          <div>
            <img
              className="videos__container-card-image"
              src="https://i.imgur.com/5qyCZrD.jpg"
            ></img>
          </div>
          <div className="videos__container-card-text">
            <h3>Become A Travel Pro In One Easy Lesson</h3>
            <p>Todd Welch</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainRight;
