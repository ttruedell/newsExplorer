import "./Navigation.css";
import { Link } from "react-router-dom";

import CurrentUserContext from "../../contexts/CurrentUserContext";
import { useContext } from "react";

function Navigation() {
  const currentUser = useContext(CurrentUserContext);

  return (
    <div>
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
          <button>Home</button>
          <button>Sign In</button>
        </div>
      )}
    </div>
  );
}

export default Navigation;
