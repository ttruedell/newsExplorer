import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import "./SearchForm.css";
import background from "../../assets/search-form-background.svg";

function SearchForm({ query, setQuery, onSearch, error, setSearchErrors }) {
  // const [query, setQuery] = useState("");
  const location = useLocation();
  // const isHome = location.pathname === "/";

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim().length >= 1) {
      onSearch(query);
    } else {
      setSearchErrors({ keyword: "Please enter a keyword" });
    }
  };

  useEffect(() => {
    setQuery("");
    setSearchErrors({ keyword: "" });
  }, [location, setQuery, setSearchErrors]);

  return (
    // <section>
    <form onSubmit={handleSubmit} className="search-form">
      <img
        src={background}
        alt="search-form-background"
        className="search-form__background"
      />
      <div className="search-form__content">
        <h1 className="search-form__header">What's going on in the world?</h1>
        <p className="search-form__subheader">
          Find the latest news on any topic and save then in your personal
          account.
        </p>
        <div className="search-form__input-container">
          <input
            type="text"
            placeholder="Enter topic"
            className="search-form__input"
            onChange={(e) => {
              setQuery(e.target.value);
              if (error.keyword) setSearchErrors({ keyword: "" });
            }}
            value={query}
            maxLength={40}
          />
          <button className="search-form__button">Search</button>
        </div>
        {error.keyword && <p className="search-form__error">{error.keyword}</p>}
      </div>
    </form>
    // </section>
  );
}

export default SearchForm;
