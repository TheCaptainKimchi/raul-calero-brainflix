import "./Upload.scss";
import UploadPreview from "../../assets/images/Upload-video-preview.jpg";
import icon from "../../assets/images/icons/publish.svg";

const Upload = () => {
  function clickHandler(e) {
    e.preventDefault();
    window.location.href = "/";
  }
  return (
    <div className="upload">
      <h1 className="upload__title">Upload Video</h1>
      <div className="upload__left-right">
        <div className="upload__left">
          <p className="upload__left-title">VIDEO THUMBNAIL</p>
          <img src={UploadPreview}></img>
        </div>
        <div className="upload__right">
          <form className="upload__right-form">
            <label className="upload__right-form-title upload__right-form-title--1">
              TITLE YOUR VIDEO
            </label>
            <input className="upload__right-form-title-input input"></input>

            <label className="upload__right-form-title upload__right-form-title--2">
              ADD A VIDEO DESCRIPTION
            </label>
            <input className="upload__right-form-description-input input"></input>
            <a className="upload__right-form-container">
              <button
                className="upload__right-form-button"
                onClick={clickHandler}
              >
                <img src={icon}></img>
                <p>PUBLISH</p>
              </button>
            </a>
            <a className="upload__right-cancel" href="/">
              <p className="upload__right-form-cancel">CANCEL</p>
            </a>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Upload;
