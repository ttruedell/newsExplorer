import "./Main.css";
import SearchForm from "../SearchForm/SearchForm";
import About from "../About/About";
import Preloader from "../Preloader/Preloader";

function Main() {
  return (
    <main className="main">
      <SearchForm />
      <Preloader />
      <About />
    </main>
  );
}
export default Main;
