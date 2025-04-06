import { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

import "./App.css";

import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import ArticleSection from "../ArticlesSection/ArticleSection";
import LoginModal from "../LoginModal/LoginModal";
import RegisterModal from "../RegisterModal/RegisterModal";

import { signUp, signIn } from "../../utils/auth";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [loggedIn, setLoggedIn] = useState(true);
  const [activeModal, setActiveModal] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);

  const handleRegisterClick = () => {
    setActiveModal("register");
  };

  const handleLoginClick = () => {
    setActiveModal("login");
  };

  const handleLogin = ({ email, password }) => {
    // signIn({ email, password })
    //   .then((userData) => {
    //     setLoggedIn(true);
    //     setCurrentUser(userData);
    //     closeActiveModal();
    //   })
    //   .catch((err) => console.error("Login failed:", err));
    setLoggedIn(true);
    setCurrentUser({ username: "Elise", email }); // Simulated user
    closeActiveModal();
  };

  const handleRegister = (values) => {
    // signUp(values)
    //   .then(() => handleLogin(values))
    //   .catch((err) => console.error("Registration failed:", err));
    setTimeout(() => {
      handleLogin({ email, password });
    }, 500);
  };

  const navigate = useNavigate();

  const handleLogout = () => {
    setCurrentUser(null);
    setLoggedIn(false);
    navigate("/");
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
    if (
      (event.type === "keydown" && event.key === "Escape") ||
      event.target === event.currentTarget
    ) {
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
        <Header
          loginClick={handleLoginClick}
          loggedIn={loggedIn}
          handleLogout={handleLogout}
          currentUser={currentUser}
        />
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/saved-news" element={<ArticleSection />}></Route>
        </Routes>
        <Footer />
      </div>
      <LoginModal
        isOpen={activeModal === "login"}
        handleCloseModal={handleModalClose}
        onSwitchModal={handleUserModal}
        validateEmail={validateEmail}
        handleLogin={handleLogin}
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        isSubmitDisabled={isSubmitDisabled}
        setIsSubmitDisabled={setIsSubmitDisabled}
      />
      <RegisterModal
        isOpen={activeModal === "register"}
        handleCloseModal={handleModalClose}
        onSwitchModal={handleUserModal}
        validateEmail={validateEmail}
        handleRegister={handleRegister}
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        username={username}
        setUsername={setUsername}
        isSubmitDisabled={isSubmitDisabled}
        setIsSubmitDisabled={setIsSubmitDisabled}
      />
    </div>
  );
}

export default App;
