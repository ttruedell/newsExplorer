import "./Navigation.css";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

import CurrentUserContext from "../../contexts/CurrentUserContext";
// import { useContext } from "react";
import logout from "../../assets/logout.png";
import logout_home from "../../assets/logout2.png";

import close from "../../assets/close.png";
import menuBlack from "../../assets/menu.png";
import menuWhite from "../../assets/menu2.png";

function Navigation({ loginClick, loggedIn, handleLogout, currentUser }) {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const areSavedArticles = location.pathname === "/saved-news";
  const username = currentUser?.username || "User";

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 700);
  const [menuOpen, setMenuOpen] = useState(false);

  let menuIcon;

  if (menuOpen) {
    menuIcon = close;
  } else {
    menuIcon = isHome ? menuWhite : menuBlack;
  }

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 700);
      if (window.innerWidth > 700) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleToggleMenu = () => setMenuOpen(!menuOpen);
  const handleSignOut = () => {
    handleLogout();
    setMenuOpen(false);
  };

  const handleLoginClick = () => {
    loginClick();
    setMenuOpen(false);
  };

  return (
    <nav className="navigation">
      {/* {loggedIn ? (
        <div className="navigation__user">
          <Link to="/">
            <button
              className={`navigation__home_signed-in ${
                areSavedArticles ? "navigation__active" : ""
              }`}
            >
              Home
            </button>
          </Link>
          <Link to="/saved-news">
            <button
              className={`navigation__saved-news ${
                areSavedArticles ? "navigation__active" : ""
              }`}
            >
              Saved Articles
            </button>
          </Link>
          <button
            className={`navigation__sign-out ${
              areSavedArticles ? "navigation__active" : ""
            }`}
            onClick={handleLogout}
          >
            {username}
            <img
              className={`navigation__sign-out-icon ${
                areSavedArticles ? "navigation__active" : ""
              }`}
              src={isHome ? logout_home : logout}
              alt="sign-out"
            />
          </button>
        </div>
      ) : (
        <div className="navigation__non-user">
          <Link to="/">
            <button className="navigation__home_signed-out">Home</button>
          </Link>
          <button onClick={loginClick} className="navigation__sign-in">
            Sign In
          </button>
        </div>
      )} */}
      {!isMobile ? (
        <ul className="navigation__list">
          <li>
            <Link
              to="/"
              className={`navigation__link ${isHome ? "active" : ""}`}
            >
              Home
            </Link>
          </li>
          {loggedIn && (
            <li>
              <Link
                to="/saved-news"
                className={`navigation__link ${!isHome ? "active" : ""}`}
              >
                Saved Articles
              </Link>
            </li>
          )}
          <li>
            {loggedIn ? (
              <button
                className="navigation__btn navigation__btn_user"
                onClick={handleSignOut}
              >
                {currentUser?.username || "User"}
                <img
                  className={`navigation__sign-out-icon ${
                    areSavedArticles ? "navigation__active" : ""
                  }`}
                  src={isHome ? logout_home : logout}
                  alt="sign-out"
                />
              </button>
            ) : (
              <button className="navigation__btn" onClick={handleLoginClick}>
                Sign In
              </button>
            )}
          </li>
        </ul>
      ) : (
        <>
          <button
            className="navigation__menu-toggle"
            onClick={handleToggleMenu}
            aria-label="Toggle Menu"
          >
            <img src={menuIcon} alt="menu" />
          </button>

          {menuOpen && (
            <div className="navigation__dropdown">
              <Link
                to="/"
                className="navigation__dropdown-link"
                onClick={() => setMenuOpen(false)}
              >
                Home
              </Link>
              {loggedIn && (
                <Link
                  to="/saved-news"
                  className="navigation__dropdown-link"
                  onClick={() => setMenuOpen(false)}
                >
                  Saved Articles
                </Link>
              )}
              {loggedIn ? (
                <button
                  className="navigation__dropdown-btn"
                  onClick={handleSignOut}
                >
                  {currentUser?.username || "Sign Out"}
                </button>
              ) : (
                <button
                  className="navigation__dropdown-btn"
                  onClick={handleLoginClick}
                >
                  Sign In
                </button>
              )}
            </div>
          )}
        </>
      )}
    </nav>
  );
}

export default Navigation;
