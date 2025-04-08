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

function Navigation({
  loginClick,
  loggedIn,
  handleLogout,
  currentUser,
  isModalOpen,
  menuOpen,
  setMenuOpen,
}) {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const isSavedNews = location.pathname === "/saved-news";
  const username = currentUser?.username || "User";

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 700);
  // const [menuOpen, setMenuOpen] = useState(false);

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

  const handleMenuClick = (e) => {
    if (!e.target.closest(".navigation__dropdown-content")) {
      setMenuOpen(false);
    }
  };

  return (
    <nav className="navigation">
      {!isMobile ? (
        <ul className="navigation__list">
          <li>
            <Link to="/">
              <p
                className={`navigation__link navigation__link_home ${
                  !isHome ? "active" : ""
                }`}
              >
                Home
              </p>
            </Link>
          </li>
          {loggedIn && (
            <li>
              <Link to="/saved-news">
                <p
                  className={`navigation__link navigation__link_news ${
                    !isHome ? "active" : ""
                  }`}
                >
                  Saved Articles
                </p>
              </Link>
            </li>
          )}
          <li>
            {loggedIn ? (
              <button
                className={`navigation__btn navigation__btn_user ${
                  isSavedNews ? "active" : ""
                }`}
                onClick={handleSignOut}
              >
                <p
                  className={`navigation__username ${
                    isSavedNews ? "navigation__active" : ""
                  }`}
                >
                  {username}
                </p>
                <img
                  className={`navigation__sign-out-icon ${
                    isSavedNews ? "navigation__active" : ""
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
            className={`navigation__menu-toggle ${
              isModalOpen ? "navigation__menu-toggle_hidden" : ""
            }`}
            onClick={handleToggleMenu}
            aria-label="Toggle Menu"
          >
            <img
              className={`navigation__menu-icon ${isModalOpen ? "hidden" : ""}`}
              src={menuIcon}
              alt="menu"
            />
          </button>

          {
            <div
              className={`navigation__dropdown ${menuOpen ? "active" : ""} `}
              onClick={handleMenuClick}
            >
              <div
                className={`navigation__dropdown-content ${
                  menuOpen ? "active" : ""
                }`}
              >
                <Link to="/" onClick={() => setMenuOpen(false)}>
                  <p className="navigation__dropdown-link">Home</p>
                </Link>
                {loggedIn && (
                  <Link to="/saved-news" onClick={() => setMenuOpen(false)}>
                    <p className="navigation__dropdown-link">Saved Articles</p>
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
            </div>
          }
        </>
      )}
    </nav>
  );
}

export default Navigation;
