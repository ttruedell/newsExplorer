import "./Header.css";
import { Link } from "react-router-dom";

import Navigation from "../Navigation/Navigation";

import { useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();

  const isHome = location.pathname === "/";

  return (
    <header className={isHome ? "header" : "header-saved"}>
      <div className={isHome ? "header__content" : "header-saved__content"}>
        <Link to="/" className={isHome ? "header__logo" : "header-saved__logo"}>
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
