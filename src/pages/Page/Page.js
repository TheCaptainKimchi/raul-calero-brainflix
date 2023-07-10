import "./Page.scss";
import icon from "../../assets/images/icons/publish.svg";
import axios from "axios";
import { useState, useEffect } from "react";

const Upload = () => {
  const [imageURL, setImageURL] = useState("");
  useEffect(() => {
    fetch("http://localhost:8080/images/Upload-video-preview.jpg")
      .then((response) => {
        if (response.ok) {
          return response.blob();
        }
        throw new Error("Network response was not ok.");
      })
      .then((blob) => {
        setImageURL(URL.createObjectURL(blob));
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  function submitHandler(e) {
    e.preventDefault();
    const titleValue = e.target.title.value;
    const descriptionValue = e.target.description.value;
    axios
      .post(
        `http://localhost:8080/videos?title=${titleValue}&description=${descriptionValue}`
      )
      .then((response) => {
        alert(response.data);
      });
    window.location.href = "/";
  }
  return (
    <div className="upload">
      <h1 className="upload__title">Upload Video</h1>
      <div className="upload__left-right">
        <div className="upload__left">
          <p className="upload__left-title">VIDEO THUMBNAIL</p>
          <img src={imageURL} alt="thumbnail-preview"></img>
        </div>
        <div className="upload__right">
          <form className="upload__right-form" onSubmit={submitHandler}>
            <label className="upload__right-form-title upload__right-form-title--1">
              TITLE YOUR VIDEO
            </label>
            <input
              className="upload__right-form-title-input input"
              type="text"
              name="title"
            ></input>

            <label className="upload__right-form-title upload__right-form-title--2">
              ADD A VIDEO DESCRIPTION
            </label>
            <input
              className="upload__right-form-description-input input"
              type="text"
              name="description"
            ></input>

            <button className="upload__right-form-button">
              <img src={icon} alt="publish-icon"></img>
              <p>PUBLISH</p>
            </button>

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
