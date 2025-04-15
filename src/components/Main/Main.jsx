import "./Main.css";
import SearchForm from "../SearchForm/SearchForm";
import About from "../About/About";
import Preloader from "../Preloader/Preloader";

function Main({
  loggedIn,
  query,
  setQuery,
  onSearch,
  isSearching,
  searchResults,
  hasSearched,
  handleBookmark,
  savedNews,
}) {
  return (
    <main className="main">
      <SearchForm onSearch={onSearch} query={query} setQuery={setQuery} />
      <Preloader
        loggedIn={loggedIn}
        isSearching={isSearching}
        searchResults={searchResults}
        hasSearched={hasSearched}
        handleBookmark={handleBookmark}
        savedNews={savedNews}
      />
      <About />
    </main>
  );
}
export default Main;
