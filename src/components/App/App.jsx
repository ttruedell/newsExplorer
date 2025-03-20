import { useState } from "react";
// import reactLogo from "../../assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";

import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import Main from "../Main/Main";
import About from "../About/About";
import Footer from "../Footer/Footer";
import { Route, Routes } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="page">
      <div className="page__content"></div>
      <Header />
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/saved-news"></Route>
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
