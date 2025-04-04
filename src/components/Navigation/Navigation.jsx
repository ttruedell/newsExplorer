import "./Navigation.css";
import { Link, useLocation } from "react-router-dom";

import CurrentUserContext from "../../contexts/CurrentUserContext";
// import { useContext } from "react";
import signout from "../../assets/sign-out-icon.jpg";

function Navigation({ loginClick, loggedIn }) {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <div className="navigation">
      {loggedIn ? (
        <div className="navigation__user">
          <Link to="/">
            <button className="navigation__home_signed-in">Home</button>
          </Link>
          <Link to="/saved-news">
            <button
              className={`navigation__saved-news ${
                location.pathname === "/saved-news" ? "navigation__active" : ""
              }`}
            >
              Saved Articles
            </button>
          </Link>
          <button className="navigation__sign-out">
            Elise
            <img
              className="navigation__sign-out-icon"
              src={signout}
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
