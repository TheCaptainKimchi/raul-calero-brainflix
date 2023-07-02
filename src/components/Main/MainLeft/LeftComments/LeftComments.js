import "./LeftComments.scss";

function LeftComments({ VideoDetails }) {
  const Comments = VideoDetails.comments;

  function getDate(date) {
    const commentDate = new Date(date.timestamp);
    return `${
      commentDate.getMonth() + 1
    }/${commentDate.getDate()}/${commentDate.getFullYear()}`;
  }

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
                  <p>{getDate(comment)}</p>
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
