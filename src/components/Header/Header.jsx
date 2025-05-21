import "./Header.css";
import { Link, useLocation } from "react-router-dom";

import Navigation from "../Navigation/Navigation";

function Header({
  loginClick,
  loggedIn,
  handleLogout,
  isModalOpen,
  menuOpen,
  setMenuOpen,
}) {
  const location = useLocation();

  const isHome = location.pathname === "/";

  return (
    <header className={isHome ? "header" : "header-saved"}>
      <div className={isHome ? "header__content" : "header-saved__content"}>
        <Link to="/">
          <p
            className={`${
              isHome
                ? "header__logo"
                : menuOpen
                ? "header__logo"
                : "header-saved__logo"
            }`}
          >
            NewsExplorer
          </p>
        </Link>
        <Navigation
          loginClick={loginClick}
          loggedIn={loggedIn}
          handleLogout={handleLogout}
          isModalOpen={isModalOpen}
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
        />
      </div>
    </header>
  );
}

export default Header;
