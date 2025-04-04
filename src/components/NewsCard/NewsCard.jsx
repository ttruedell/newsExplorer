import "./NewsCard.css";
import remove from "../../assets/trash.jpg";
import placeholder from "../../assets/random-image-1.jpg";
import bookmark from "../../assets/bookmark.jpg";
import { useLocation } from "react-router-dom";
import { useState } from "react";

function NewsCard({ card }) {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    // <div className="news-cards">
    <li className="news-card">
      {isHome ? (
        <div className="news-card__header-container">
          <h2 className="news-card__confirm-bookmark">
            Sign in to save articles
          </h2>

          <button className="news-card__bookmark-btn">
            <img
              className="news-card__bookmark-icon"
              src={bookmark}
              alt="bookmark-icon"
            />
          </button>
        </div>
      ) : (
        <div className="news-card__header-container">
          <h2 className="news-card__keyword">example</h2>
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
          >
            <img
              className="news-card__remove-icon"
              style={{
                opacity: showConfirm ? 0.5 : 1,
                transition: "opacity 0.5s ease-in-out",
              }}
              src={remove}
              alt="remove-icon"
            />
          </button>
        </div>
      )}

      <div className="news-card__content">
        <img
          className="news-card__image"
          src={card.image}
          alt="article-image"
        />
        <article className="news-card__article">
          <p className="news-card__date">{card.date}</p>
          <h2 className="news-card__title">{card.title}</h2>
          <p className="news-card__text">{card.text}</p>
          <h3 className="news-card__author">{card.author}</h3>
        </article>
      </div>
    </li>
    // </div>
  );
}

export default NewsCard;
