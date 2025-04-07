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
    <div className="navigation">
      {loggedIn ? (
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
      )}
    </div>
  );
}

export default Navigation;
