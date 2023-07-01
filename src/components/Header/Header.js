import logo from "../../assets/images/BrainFlix-logo.svg";
import search from "../../assets/images/icons/search.svg";
import avatar from "../../assets/images/Mohan-muruge.jpg";
import upload from "../../assets/images/icons/upload.svg";
import "../../styles/Header.scss";

function Header() {
  return (
    <div className="header">
      <a className="header__logo" href="/">
        <img src={logo}></img>
      </a>
      <div className="header__tools">
        <form className="header__tools-form">
          <img src={search} className="header__tools-form-icon"></img>
          <input
            type="text"
            src={search}
            placeholder="Search"
            name="search"
            className="header__tools-form-input"
          ></input>
        </form>
        <a className="header__tools-avatar">
          <img src={avatar}></img>
        </a>
      </div>
      <div className="header__upload">
        <a className="header__upload-a" href="/upload">
          <button className="header__upload-a-button">
            <img src={upload} className="header__upload-a-button-icon"></img>
            <h3>UPLOAD</h3>
          </button>
        </a>
        <a className="header__upload-avatar">
          <img src={avatar}></img>
        </a>
      </div>
    </div>
  );
}

export default Header;
