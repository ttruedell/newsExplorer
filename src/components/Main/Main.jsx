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
  visibleCount,
  setVisibleCount,
  handleShowMore,
  formatDate,
  error,
  setSearchErrors,
}) {
  return (
    <main className="main">
      <SearchForm
        onSearch={onSearch}
        query={query}
        setQuery={setQuery}
        error={error}
        setSearchErrors={setSearchErrors}
      />
      <Preloader
        loggedIn={loggedIn}
        isSearching={isSearching}
        searchResults={searchResults}
        hasSearched={hasSearched}
        handleBookmark={handleBookmark}
        savedNews={savedNews}
        visibleCount={visibleCount}
        setVisibleCount={setVisibleCount}
        handleShowMore={handleShowMore}
        formatDate={formatDate}
      />
      <About />
    </main>
  );
}
export default Main;
