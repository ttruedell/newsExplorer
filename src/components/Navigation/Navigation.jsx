import "./Navigation.css";
import { Link } from "react-router-dom";

import CurrentUserContext from "../../contexts/CurrentUserContext";
// import { useContext } from "react";
import { useLocation } from "react-router-dom";

import signout from "../../assets/sign-out-icon.jpg";

function Navigation({ loginClick }) {
  const isHome = location.pathname === "/";

  return (
    <div className="navigation">
      {isHome ? (
        <div className="navigation__non-user">
          <Link to="/">
            <button className="navigation__home_signed-out">Home</button>
          </Link>
          <button onClick={loginClick} className="navigation__sign-in">
            Sign In
          </button>
        </div>
      ) : (
        <div className="navigation__user">
          <Link to="/">
            <button className="navigation__home_signed-in">Home</button>
          </Link>
          <Link to="/saved-news" /*className="navigation__saved-news-button"*/>
            <button className="navigation__saved-news">Saved Articles</button>
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
      )}
    </div>
  );
}

export default Navigation;
