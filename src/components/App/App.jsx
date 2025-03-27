import { useEffect, useState } from "react";
// import reactLogo from "../../assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";

import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import ArticleSection from "../ArticlesSection/ArticleSection";
import { Route, Routes } from "react-router-dom";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  // function changeHeader {
  //   if (loggedIn) {

  //   }
  // }

  return (
    <div className="page">
      <div className="page__content">
        <Header />
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/saved-news" element={<ArticleSection />}></Route>
        </Routes>

        <Footer />
      </div>
    </div>
  );
}

export default App;
