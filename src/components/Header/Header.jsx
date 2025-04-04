import "./Header.css";
import { Link, useLocation } from "react-router-dom";

import Navigation from "../Navigation/Navigation";

function Header({ loginClick, loggedIn }) {
  const location = useLocation();

  const isHome = location.pathname === "/";

  return (
    <header className={isHome ? "header" : "header-saved"}>
      <div className={isHome ? "header__content" : "header-saved__content"}>
        <Link to="/" className={isHome ? "header__logo" : "header-saved__logo"}>
          <p>NewsExplorer</p>
        </Link>
        <Navigation loginClick={loginClick} loggedIn={loggedIn} />
      </div>
    </header>
  );
}

export default Header;
