import { useEffect, useState, useContext } from "react";
import { Route, Routes, Navigate, useNavigate } from "react-router-dom";
import CurrentUserContext from "../../contexts/CurrentUserContext";

import "./App.css";

import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import ArticleSection from "../ArticlesSection/ArticleSection";
import LoginModal from "../LoginModal/LoginModal";
import RegisterModal from "../RegisterModal/RegisterModal";

import { initialNewsCards } from "../../utils/constants";

import { signUp, signIn } from "../../utils/auth";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);
  const [activeModal, setActiveModal] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  const [isSearching, setIsSearching] = useState(false);
  const [searchResults, setSearchResults] = useState([]);

  const [isLoginSubmitDisabled, setIsLoginSubmitDisabled] = useState(true);
  const [isRegisterSubmitDisabled, setIsRegisterSubmitDisabled] =
    useState(true);

  const [loginErrors, setLoginErrors] = useState({
    email: "",
    password: "",
  });

  const [registerErrors, setRegisterErrors] = useState({
    email: "",
    password: "",
    username: "",
  });

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
    const userData = { username: "Elise", email }; // Simulated user
    if (email && password) {
      setLoggedIn(true);
      console.log("You are logged in:", !loggedIn);
      setCurrentUser(userData);
      localStorage.setItem("user", JSON.stringify(userData));
      closeActiveModal();
    }
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
    console.log("You are logged in:", !loggedIn);
    localStorage.removeItem("user");
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

  const handleSearch = (query) => {
    if (!query.trim()) return;

    setIsSearching(true);

    // Simulate API with setTimeout
    setTimeout(() => {
      const q = query.toLowerCase();
      const results = initialNewsCards.filter(({ title, text, author }) => {
        return (
          title.toLowerCase().includes(q) ||
          text.toLowerCase().includes(q) ||
          author.toLowerCase().includes(q)
        );
      });

      setSearchResults(results);
      setIsSearching(false);
    }, 1500);
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

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setCurrentUser(JSON.parse(storedUser));
      setLoggedIn(true);
    }
  }, []);

  function validateEmail(email) {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(email);
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <div className="page__content">
          <Header
            loginClick={handleLoginClick}
            loggedIn={loggedIn}
            handleLogout={handleLogout}
            isModalOpen={activeModal === "login" || activeModal === "register"}
            menuOpen={menuOpen}
            setMenuOpen={setMenuOpen}
          />
          <Routes>
            <Route
              path="/"
              element={
                <Main
                  loggedIn={loggedIn}
                  onSearch={handleSearch}
                  isSearching={isSearching}
                  searchResults={searchResults}
                />
              }
            ></Route>
            <Route
              path="/saved-news"
              element={
                loggedIn ? <ArticleSection /> : <Navigate to="/" replace />
              }
            ></Route>
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
          isSubmitDisabled={isLoginSubmitDisabled}
          setIsSubmitDisabled={setIsLoginSubmitDisabled}
          errors={loginErrors}
          setErrors={setLoginErrors}
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
          isSubmitDisabled={isRegisterSubmitDisabled}
          setIsSubmitDisabled={setIsRegisterSubmitDisabled}
          errors={registerErrors}
          setErrors={setRegisterErrors}
        />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
