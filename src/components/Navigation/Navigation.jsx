import "./Navigation.css";
import { Link } from "react-router-dom";

import CurrentUserContext from "../../contexts/CurrentUserContext";
import { useContext } from "react";

function Navigation() {
  const currentUser = useContext(CurrentUserContext);

  return (
    <div className="navigation">
      {currentUser ? (
        <Link to="/profile" className="navigation__links">
          <div className="navigation__user-container">
            <button>Home</button>
            <button>Saved Articles</button>
            <button>{currentUser.name}</button>
          </div>
        </Link>
      ) : (
        <div className="navigation__sign-in">
          <button className="navigation__home-button">Home</button>
          <button className="navigation__sign-in-button">Sign In</button>
        </div>
      )}
    </div>
  );
}

export default Navigation;
