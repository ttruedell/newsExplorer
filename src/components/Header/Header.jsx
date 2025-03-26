import "./Header.css";
import { Link } from "react-router-dom";

import Navigation from "../Navigation/Navigation";

function Header() {
  return (
    <header className="header">
      <div className="header__content">
        <Link to="/" className="header__logo">
          <p>NewsExplorer</p>
        </Link>
        {/* <Link to="/">
        <button>Home</button>
      </Link>
      <button>Sign In</button> */}

        <Navigation />
      </div>
      {/* <hr className="header__border" width="100%" color="#C4C4C4" size="1px" /> */}
    </header>
  );
}

export default Header;
