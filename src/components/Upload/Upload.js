import "./Upload.scss";
import Header from "../Header/Header";
import UploadPreview from "../../assets/images/Upload-video-preview.jpg";
import Icon from "../../assets/images/icons/upload.svg";

const Upload = () => {
  return (
    <div className="upload">
      <Header />
      <h1 className="upload__title">Upload Video</h1>
      <div className="upload__left">
        <p className="upload__left-title">VIDEO THUMBNAIL</p>
        <img src={UploadPreview}></img>
      </div>

      <div className="upload__right">
        <form className="upload__right-form">
          <label className="upload__right-form-title upload__right-form-title--1">
            TITLE YOUR VIDEO
          </label>
          <input className="upload__right-form-title-input"></input>
          <label className="upload__right-form-title upload__right-form-title--2">
            ADD A VIDEO DESCRIPTION
          </label>
          <input className="upload__right-form-description-input"></input>
          <a>
            <img src={Icon}></img>
            <button>PUBLISH</button>
          </a>
        </form>
      </div>
    </div>
  );
};

export default Upload;
