import "./Preloader.css";
import ellipse from "../../assets/ellipse.svg";
import notFound from "../../assets/not-found.svg";
import { initialNewsCards } from "../../utils/constants";
import NewsCard from "../NewsCard/NewsCard";

function Preloader({
  loggedIn,
  isSearching,
  searchResults,
  hasSearched,
  handleBookmark,
  savedNews,
  visibleCount,
  handleShowMore,
  formatDate,
}) {
  if (!hasSearched) return null;
  // return (
  // <div className="preloader">

  if (isSearching) {
    return (
      <div className="preloader">
        <div className="prelaoder__loading">
          <img
            className="preloader__circle-preloader"
            src={ellipse}
            alt="loading"
          />
          <p className="prelaoder__text">Searching for news...</p>
        </div>
      </div>
    );
  }

  if (
    !isSearching &&
    hasSearched &&
    (!searchResults || searchResults.length === 0)
  ) {
    return (
      <div className="preloader">
        <div className="preloader__reuslts">
          <div className="prelaoder__no-results">
            <img className="preloader__icon" src={notFound} alt="loading" />
            <h2 className="preloader__header">Nothing Found</h2>
            <p className="prelaoder__text">Sorry, but nothing matched</p>
            <p className="prelaoder__text"> your results.</p>
          </div>
        </div>
      </div>
    );
  }

  if (searchResults === "error") {
    return (
      <div className="preloader">
        <div className="preloader__reuslts">
          <div className="prelaoder__no-results">
            <h2 className="preloader__header">
              Sorry, something went wrong during the request. Please try again
              later.
            </h2>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="preloader">
      <div className="prelaoder__results">
        <div className="prelaoder__found-results">
          <div>
            <h2 className="news-cards__results-header">Search Results</h2>
            <ul className="news-cards">
              {
                /*initialNewsCards*/ searchResults
                  .slice(0, visibleCount)
                  .map((card, index) => (
                    <NewsCard
                      key={index}
                      card={card}
                      loggedIn={loggedIn}
                      handleBookmark={handleBookmark}
                      savedNews={savedNews}
                      formatDate={formatDate}
                    />
                  ))
              }
            </ul>
          </div>
          {searchResults.length > visibleCount && (
            <button className="preloader__show-more" onClick={handleShowMore}>
              Show More
            </button>
          )}
        </div>
      </div>
    </div>
  );

  // </div>;
  // );
}

export default Preloader;
