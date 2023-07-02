import avatar from "../../../../assets/images/Mohan-muruge.jpg";
import comment from "../../../../assets/images/icons/add_comment.svg";
import "./LeftForm.scss";

function LeftForm({ VideoDetails }) {
  return (
    <form className="form">
      <h3 className="form__total-comments">{`${VideoDetails.comments.length} Comments`}</h3>
      <p className="form__subtitle">JOIN THE CONVERSATION</p>
      <div className="form__container">
        <div className="form__container-left">
          <img src={avatar} alt="avatar-photo"></img>
        </div>
        <div className="form__container-right">
          <p className="form__container-right-title">JOIN THE CONVERSATION</p>
          <input
            className="form__container-right-input"
            placeholder="Add a new comment"
            type="text"
            name="comment"
          ></input>
          <a className="form__container-right-post">
            <button className="form__right-post-button">
              <img src={comment} alt="post-icon"></img>
              <p>COMMENT</p>
            </button>
          </a>
        </div>
      </div>
    </form>
  );
}

export default LeftForm;
