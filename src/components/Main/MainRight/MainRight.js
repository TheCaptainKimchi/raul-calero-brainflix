import "../../../styles/MainRight.scss";

function MainRight(props) {
  const Videos = props.Videos;
  return (
    <div className="videos">
      <h3 className="videos__title">NEXT VIDEOS</h3>
      <div className="videos__container">
        <ul className="videos__container-card">
          {Videos.map((Videos) => {
            return (
              <li key={Videos.id}>
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
{
  /* 
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
*/
}
