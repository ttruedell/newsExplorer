import "./ArticleSection.css";
import NewsCard from "../NewsCard/NewsCard";
import { initialNewsCards } from "../../utils/constants";

function ArticleSection({
  loggedIn,
  savedNews,
  handleDelete,
  formatDate,
  // visibleCount,
  // handleShowMore,
}) {
  const keywords = [
    ...new Set(savedNews.map((card) => card.keyword).filter(Boolean)),
  ];

  return (
    <main className="articles">
      <div className="articles__top-bar">
        <p className="articles__subheading">Saved articles </p>
        <h1 className="articles__heading">
          Elise, you have {keywords.length || "no"} saved articles
        </h1>
        <p className="articles__keywords">
          By keywords: {""}
          {keywords.length > 0 ? (
            <span className="articles__keywords-bold">
              {`${keywords.slice(0, 2).join(", ")}${
                keywords.length > 2 ? `, and ${keywords.length - 2} other` : ""
              }`}
            </span>
          ) : (
            "No keywords saved"
          )}
        </p>
      </div>
      <ul className="news-cards">
        {
          /*initialNewsCards*/ savedNews
            // .slice(0, visibleCount)
            .map((card, index) => (
              <NewsCard
                key={index}
                card={card}
                loggedIn={loggedIn}
                deleteCard={handleDelete}
                formatDate={formatDate}
              />
            ))
        }
      </ul>
      {/* {savedNews.length > visibleCount && (
        <button className="articles__show-more" onClick={handleShowMore}>
          Show More
        </button>
      )} */}
    </main>
  );
}

export default ArticleSection;
