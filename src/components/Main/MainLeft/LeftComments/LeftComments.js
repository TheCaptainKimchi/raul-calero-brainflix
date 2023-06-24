import "../../../../styles/LeftComments.scss";

function LeftComments(props) {
  const Comments = props.VideoDetails.comments;
  const date = new Date(props.VideoDetails.timestamp);
  const formattedDate = `${
    date.getMonth() + 1
  }/${date.getDate()}/${date.getFullYear()}`;

  console.log(Comments);

  return (
    <div className="comments">
      <ul className="comments__cards">
        {Comments.map((comment) => {
          return (
            <li key={comment.id} className="comments__card">
              <div className="comments__card-left">
                <img></img>
              </div>
              <div className="comments__card-right">
                <div className="comments__card-right-top">
                  <h3>{comment.name}</h3>
                  <p>{formattedDate}</p>
                </div>
                <div className="comments__card-right-bottom">
                  <p>{comment.comment}</p>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default LeftComments;
