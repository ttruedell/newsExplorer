import { useState } from "react";
// import reactLogo from "../../assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";

import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import About from "../About/About";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="page">
      <div className="page__content"></div>
      <Header></Header>
      <SearchForm></SearchForm>
      <About></About>
    </div>
  );
}

export default App;
