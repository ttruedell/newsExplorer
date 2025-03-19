import "./SearchForm.css";

function SearchForm() {
  return (
    <div>
      <form action="">
        <h1>What's going on in the world?</h1>
        <p>
          Find the latest news on any topic and save then in your personal
          account.
        </p>
        <div>
          <input type="text" placeholder="Enter topic" />
          <button>Search</button>
        </div>
      </form>
    </div>
  );
}

export default SearchForm;
