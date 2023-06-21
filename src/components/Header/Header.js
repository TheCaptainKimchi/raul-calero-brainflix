import logo from "../../assets/images/BrainFlix-logo.svg";
import search from "../../assets/images/icons/search.svg";
import avatar from "../../assets/images/Mohan-muruge.jpg";
import upload from "../../assets/images/icons/upload.svg";

function Header() {
  return (
    <div className="header">
      <a className="header__logo">
        <img src={logo}></img>
      </a>
      <div className="header__tools">
        <form className="header__tools-form">
          <a>
            <img src={search} className="header__tools-form-icon"></img>
            <input
              type="text"
              src={search}
              placeholder="Search"
              name="search"
              className="header__tools-form-input"
            ></input>
          </a>
        </form>
        <a className="header__tools-avatar">
          <img src={avatar}></img>
        </a>
      </div>
      <a className="header__upload">
        <button className="header__upload-button">
          <img src={upload} className="header__upload-button-icon"></img>
          UPLOAD
        </button>
      </a>
    </div>
  );
}

export default Header;
