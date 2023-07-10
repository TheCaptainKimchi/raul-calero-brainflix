import logo from "../../assets/images/BrainFlix-logo.svg";
import search from "../../assets/images/icons/search.svg";
import avatar from "../../assets/images/Mohan-muruge.jpg";
import upload from "../../assets/images/icons/upload.svg";
import "./Header.scss";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <Link to={`/`} className="header__logo">
        <img src={logo}></img>
      </Link>
      <div className="header__tools">
        <form className="header__tools-form">
          <img
            src={search}
            className="header__tools-form-icon"
            alt="search-icon"
          ></img>
          <input
            type="text"
            src={search}
            placeholder="Search"
            name="search"
            className="header__tools-form-input"
          ></input>
        </form>
        <a className="header__tools-avatar">
          <img src={avatar} alt="avatar-photo"></img>
        </a>
      </div>
      <div className="header__upload">
        <Link to={`/upload`} className="header__upload-a">
          <button className="header__upload-a-button">
            <img
              src={upload}
              className="header__upload-a-button-icon"
              alt="upload-icon"
            ></img>
            <h3>UPLOAD</h3>
          </button>
        </Link>
        <a className="header__upload-avatar">
          <img src={avatar} alt="avatar-photo"></img>
        </a>
      </div>
    </div>
  );
}

export default Header;
