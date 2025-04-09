import "./Main.css";
import SearchForm from "../SearchForm/SearchForm";
import About from "../About/About";
import Preloader from "../Preloader/Preloader";

function Main({ loggedIn, onSearch, isSearching, searchResults }) {
  return (
    <main className="main">
      <SearchForm onSearch={onSearch} />
      <Preloader
        loggedIn={loggedIn}
        isSearching={isSearching}
        searchResults={searchResults}
      />
      <About />
    </main>
  );
}
export default Main;
