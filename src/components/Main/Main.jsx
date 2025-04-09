import "./Main.css";
import SearchForm from "../SearchForm/SearchForm";
import About from "../About/About";
import Preloader from "../Preloader/Preloader";

function Main({ loggedIn, onSearch, isSearching, searchResults, hasSearched }) {
  return (
    <main className="main">
      <SearchForm onSearch={onSearch} />
      <Preloader
        loggedIn={loggedIn}
        isSearching={isSearching}
        searchResults={searchResults}
        hasSearched={hasSearched}
      />
      <About />
    </main>
  );
}
export default Main;
