import logo from "../../assets/images/BrainFlix-logo.svg";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <a className="header__left-logo">
          <img src={logo}></img>
        </a>
      </div>
    </div>
  );
}

export default Header;
