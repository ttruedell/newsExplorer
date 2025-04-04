import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

import "./App.css";

import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import ArticleSection from "../ArticlesSection/ArticleSection";
import LoginModal from "../LoginModal/LoginModal";
import RegisterModal from "../RegisterModal/RegisterModal";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [loggedIn, setLoggedIn] = useState(true);
  const [activeModal, setActiveModal] = useState("");

  const handleRegisterClick = () => {
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
    }
  };

  const handleModalClick = (event) => {
    if (event.target === event.currentTarget) {
      closeActiveModal();
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

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeActiveModal();
      }
    };

    if (activeModal) {
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeModal]);

  function validateEmail(email) {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(email);
  }

  return (
    <div className="page">
      <div className="page__content">
        <Header loginClick={handleLoginClick} loggedIn={loggedIn} />
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/saved-news" element={<ArticleSection />}></Route>
        </Routes>
        <Footer />
      </div>
      <LoginModal
        isOpen={activeModal === "login"}
        handleCloseModal={handleModalClose}
        handleModalClick={handleModalClick}
        onSwitchModal={handleUserModal}
        validateEmail={validateEmail}
      />
      <RegisterModal
        isOpen={activeModal === "register"}
        handleCloseModal={handleModalClose}
        handleModalClick={handleModalClick}
        onSwitchModal={handleUserModal}
        validateEmail={validateEmail}
      />
    </div>
  );
}

export default App;
