import { useEffect, useState, useContext } from "react";
import {
  Route,
  Routes,
  Navigate,
  useNavigate,
  useLocation,
} from "react-router-dom";
import CurrentUserContext from "../../contexts/CurrentUserContext";

import "./App.css";

import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import ArticleSection from "../ArticlesSection/ArticleSection";
import LoginModal from "../LoginModal/LoginModal";
import RegisterModal from "../RegisterModal/RegisterModal";
import ConfirmRegisterModal from "../ConfirmRegisterModal/ConfirmRegistermodal";

import { initialNewsCards, userData } from "../../utils/constants";
import { fetchNews, formatDate } from "../../utils/newsApi";

import { signUp, signIn } from "../../utils/auth";

function App() {
  const newsApiBaseUrl =
    process.env.NODE_ENV === "production"
      ? "https://nomoreparties.co/news/v2/everything"
      : "https://newsapi.org/v2/everything";

  const location = useLocation();

  const [currentUser, setCurrentUser] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);
  const [activeModal, setActiveModal] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  const [isSearching, setIsSearching] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);

  // const [savedNews, setSavedNews] = useState([]);
  const [query, setQuery] = useState("");

  const [visibleCount, setVisibleCount] = useState(3);

  const [isLoginSubmitDisabled, setIsLoginSubmitDisabled] = useState(true);
  const [isRegisterSubmitDisabled, setIsRegisterSubmitDisabled] =
    useState(true);

  const [registeredEmails, setRegisteredEmails] = useState([
    "elise@example.com",
  ]);
  const [emailTakenError, setEmailTakenError] = useState("");

  const [loginErrors, setLoginErrors] = useState({
    email: "",
    password: "",
  });

  const [registerErrors, setRegisterErrors] = useState({
    email: "",
    password: "",
    username: "",
  });

  const [searchErrors, setSearchErrors] = useState({
    keyword: "",
  });

  const handleRegisterClick = () => {
    setActiveModal("confirm-register");
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

    const storedUsers = JSON.parse(localStorage.getItem("users"));
    const matchedUser = storedUsers.find(
      (user) => user.email === email && user.password === password
    );
    // const matchedUser = userData.find(
    //   (user) => user.email === email && user.password === password
    // );

    if (matchedUser) {
      const updatedUser = {
        ...matchedUser,
        savedNews: matchedUser.savedNews || [],
      };
      setLoggedIn(true);
      console.log("You are logged in:", !loggedIn);
      setCurrentUser(updatedUser);
      localStorage.setItem("user", JSON.stringify(updatedUser));
      closeActiveModal();
    }
  };

  const handleRegister = (/*values*/ { email, password, username }) => {
    // signUp(values)
    //   .then(() => handleLogin(values))
    //   .catch((err) => console.error("Registration failed:", err));

    if (registeredEmails.includes(email)) {
      setEmailTakenError("This email is already registered.");
      setIsRegisterSubmitDisabled(true);
      return;
    }

    setRegisteredEmails((prev) => [...prev, email]);
    setEmailTakenError("");

    setTimeout(() => {
      handleLogin({ email, password });
      setActiveModal("confirm-register");
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
    if (!query.trim()) {
      setSearchResults({ keyword: "Please enter a keyword." });
      return;
    }

    setSearchErrors({ keyword: "" });
    setIsSearching(true);
    setHasSearched(true);
    setVisibleCount(3);

    fetchNews(query)
      .then((articles) => {
        const mapped = articles.map((a) => ({
          id: `${a.title}-${a.publishedAt}`,
          title: a.title,
          date: a.publishedAt,
          text: a.description,
          author: a.source.name,
          image: a.urlToImage,
          keyword: query,
        }));
        console.log(query);
        setSearchResults(mapped);
      })
      .catch((err) => {
        console.error(err);
        setSearchResults("error");
      })
      .finally(() => {
        setIsSearching(false);
      });

    // Simulate API with setTimeout
    // setTimeout(() => {
    //   const q = query.toLowerCase();
    //   const results = initialNewsCards.filter(({ title, text, author }) => {
    //     return (
    //       title.toLowerCase().includes(q) ||
    //       text.toLowerCase().includes(q) ||
    //       author.toLowerCase().includes(q)
    //     );
    //   });

    //   setSearchResults(results);
    //   setIsSearching(false);
    // }, 1500);
  };

  //For front-end purposes
  const updateUserInStorage = (updatedUser) => {
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    const updatedUsers = storedUsers.map((user) =>
      user.email === updatedUser.email ? updatedUser : user
    );
    localStorage.setItem("users", JSON.stringify(updatedUsers));
  };

  const handleBookmark = (card) => {
    if (!loggedIn) {
      setActiveModal("login");
      return;
    }

    const cardWithKeyword = {
      ...card,
      keyword: query,
    };

    const isAlreadySaved = currentUser.savedNews.some(
      (saved) => saved.id === card.id
    );

    const updatedSavedNews = isAlreadySaved
      ? currentUser.savedNews.filter((saved) => saved.id !== card.id)
      : [...currentUser.savedNews, cardWithKeyword];

    // if (isAlreadySaved) {
    //   setSavedNews(savedNews.filter((saved) => saved.id !== card.id));
    // } else {
    //   setSavedNews((prev) => [...prev, cardWithKeyword]);
    // }

    const updatedUser = {
      ...currentUser,
      savedNews: updatedSavedNews,
    };

    setCurrentUser(updatedUser);
    localStorage.setItem("user", JSON.stringify(updatedUser));

    updateUserInStorage(updatedUser);
  };

  const handleDelete = (cardToDelete) => {
    const updatedSavedNews =
      /*setSavedNews((prevSavedNews) =>
      prevSavedNews.filter((card) => card.id !== cardToDelete.id)
    );*/
      currentUser.savedNews.filter((card) => card.id !== cardToDelete.id);

    const updatedUser = {
      ...currentUser,
      savedNews: updatedSavedNews,
    };

    setCurrentUser(updatedUser);
    localStorage.setItem("user", JSON.stringify(updatedUser));

    updateUserInStorage(updatedUser);
  };

  const handleShowMore = () => {
    setVisibleCount((prev) => prev + 3);
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
      const parsedUser = JSON.parse(storedUser);
      setCurrentUser(parsedUser);
      setLoggedIn(true);
    }
  }, []);

  useEffect(() => {
    const storedUsers = localStorage.getItem("users");
    if (!storedUsers) {
      localStorage.setItem("users", JSON.stringify(userData));
    }
  }, []);

  useEffect(() => {
    if (location.pathname !== "/") {
      setSearchResults([]);
      setHasSearched(false);
      setIsSearching(false);
      setVisibleCount(3);
    }
  }, [location]);

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
            isModalOpen={
              activeModal === "login" ||
              activeModal === "register" ||
              activeModal === "confirm-register"
            }
            menuOpen={menuOpen}
            setMenuOpen={setMenuOpen}
          />
          <Routes>
            <Route
              path="/"
              element={
                <Main
                  loggedIn={loggedIn}
                  query={query}
                  setQuery={setQuery}
                  onSearch={handleSearch}
                  isSearching={isSearching}
                  searchResults={searchResults}
                  hasSearched={hasSearched}
                  handleBookmark={handleBookmark}
                  // savedNews={savedNews}
                  savedNews={currentUser?.savedNews || []}
                  visibleCount={visibleCount}
                  setVisibleCount={setVisibleCount}
                  handleShowMore={handleShowMore}
                  formatDate={formatDate}
                  error={searchErrors}
                  setSearchErrors={setSearchErrors}
                />
              }
            ></Route>
            <Route
              path="/saved-news"
              element={
                loggedIn ? (
                  <ArticleSection
                    // savedNews={savedNews}
                    savedNews={currentUser?.savedNews || []}
                    loggedIn={loggedIn}
                    handleDelete={handleDelete}
                    visibleCount={visibleCount}
                    setVisibleCount={setVisibleCount}
                    handleShowMore={handleShowMore}
                    formatDate={formatDate}
                  />
                ) : (
                  <Navigate to="/" replace />
                )
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
          setActiveModal={setActiveModal}
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
          emailTakenError={emailTakenError}
          setEmailTakenError={setEmailTakenError}
          registeredEmails={registeredEmails}
        />
        <ConfirmRegisterModal
          isOpen={activeModal === "confirm-register"}
          handleCloseModal={handleModalClose}
          onSwitchModal={() => setActiveModal("login")}
          setActiveModal={setActiveModal}
        />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
