import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <Link to="/">
        <p className="header__logo">NewsExplorer</p>
      </Link>
      <Link to="/">
        <button>Home</button>
      </Link>
      <button>Sign In</button>
    </header>
  );
}

export default Header;
