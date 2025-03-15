import "./Navigation.css";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <div>
      <Link to="/">
        <button>Home</button>
      </Link>
      <button>Sign In</button>
    </div>
  );
}

export default Navigation;
