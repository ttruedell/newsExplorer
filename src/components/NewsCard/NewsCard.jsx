import "./NewsCard.css";
import remove from "../../assets/trash.svg";
import bookmark from "../../assets/bookmark.svg";
import bookmark_active from "../../assets/bookmark_active.svg";
import { useLocation } from "react-router-dom";
import { useState } from "react";

function NewsCard({
  card,
  loggedIn,
  handleBookmark,
  deleteCard,
  savedNews,
  formatDate,
}) {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const [showConfirm, setShowConfirm] = useState(false);
  const [hoveringBookmark, setHoveringBookmark] = useState(false);

  const isBookmarked =
    loggedIn &&
    Array.isArray(savedNews) &&
    savedNews.some((saved) => saved.id === card.id);

  // const keywords = Array.isArray(savedNews)
  //   ? [...new Set(savedNews.map((card) => card.keyword).filter(Boolean))]
  //   : [];

  const author = card.author.toUpperCase();

  const articleOpen = () => window.open(card.url, "_blank");
  return (
    // <div className="news-cards__">
    <li className="news-card">
      {isHome ? (
        <div
          className="news-card__header-container 
        news-card__header-container_save"
        >
          {!loggedIn && (
            <h2
              className="news-card__confirm-bookmark"
              style={{
                opacity: hoveringBookmark ? 1 : 0,
                transition: "opacity 0.5s ease-in-out",
              }}
            >
              Sign in to save articles
            </h2>
          )}
          <button
            className="news-card__bookmark-btn"
            onMouseEnter={() => setHoveringBookmark(true)}
            onMouseLeave={() => setHoveringBookmark(false)}
            onClick={() => handleBookmark(card)}
          >
            <img
              className={`news-card__bookmark-icon ${
                isBookmarked ? "bookmarked" : ""
              }`}
              style={{
                opacity: isBookmarked ? 1 : hoveringBookmark ? 1 : 0.29,
                transition: "opacity 0.5s ease-in-out",
              }}
              src={isBookmarked ? bookmark_active : bookmark}
              alt="bookmark-icon"
            />
          </button>
        </div>
      ) : (
        <div
          className="news-card__header-container
        news-card__header-container_delete"
        >
          <h2 className="news-card__keyword">{card.keyword || "No keyword"}</h2>
          <h2
            className="news-card__confirm-remove"
            style={{
              opacity: showConfirm ? 1 : 0,
              transition: "opacity 0.5s ease-in-out",
            }}
          >
            Remove from saved
          </h2>

          <button
            className="news-card__remove-btn"
            onMouseEnter={() => setShowConfirm(true)}
            onMouseLeave={() => setShowConfirm(false)}
            onClick={() => deleteCard(card)}
          >
            <img
              className="news-card__remove-icon"
              style={{
                opacity: showConfirm ? 1 : 0.29,
                transition: "opacity 0.5s ease-in-out",
              }}
              src={remove}
              alt="remove-icon"
            />
          </button>
        </div>
      )}

      <div className="news-card__content" onClick={articleOpen} role="link">
        <img className="news-card__image" src={card.image} alt={card.title} />
        <article className="news-card__article">
          <p className="news-card__date">{formatDate(card.date)}</p>
          <h2 className="news-card__title">{card.title}</h2>
          <p className="news-card__text">{card.text}</p>
        </article>
        <h3 className="news-card__author">{author}</h3>
      </div>
    </li>
    // </div>
  );
}

export default NewsCard;
