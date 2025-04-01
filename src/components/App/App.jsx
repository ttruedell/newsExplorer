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
  const [activeModal, setActiveModal] = useState("");

  const handleSignUpClick = () => {
    setActiveModal("register");
  };

  const handleLoginClick = () => {
    setActiveModal("login");
  };

  const closeActiveModal = (event) => {
    if (!event) {
      return setActiveModal("");
    }

    if (handleModalClose(event)) {
      setActiveModal("");
    }
  };

  const handleModalClose = (event) => {
    if (event.type === "keydown" && event.key === "Escape") {
      closeActiveModal();
    } else if (event.type === "click") {
      if (
        (!event.target.closest(".modal__content") &&
          event.target.classList.contains("modal")) ||
        event.target.closest(".modal__close-btn")
      ) {
        closeActiveModal();
      }
    }
  };

  const handleUserModal = () => {
    if (activeModal === "register") {
      closeActiveModal();
      setActiveModal("login");
    }
    if (activeModal === "login") {
      closeActiveModal();
      setActiveModal("register");
    }
  };

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
