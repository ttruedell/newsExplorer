import "./SearchForm.css";

function SearchForm() {
  return (
    <div>
      <form action="" className="search-form">
        <h1 className="search-form__header">What's going on in the world?</h1>
        <p className="search-form__subheader">
          Find the latest news on any topic and save then in your personal
          account.
        </p>
        <div>
          <input
            type="text"
            placeholder="Enter topic"
            className="search-form__input"
          />
          <button>Search</button>
        </div>
      </form>
    </div>
  );
}

export default SearchForm;
