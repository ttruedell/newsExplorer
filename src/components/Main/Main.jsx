import "./Main.css";
import SearchForm from "../SearchForm/SearchForm";
import About from "../About/About";
import Preloader from "../Preloader/Preloader";

function Main(loggedIn, setLoggedIn) {
  return (
    <main className="main">
      <SearchForm />
      <Preloader loggedIn={loggedIn} />
      <About />
    </main>
  );
}
export default Main;
