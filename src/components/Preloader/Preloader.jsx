import "./Preloader.css";
import ellipse from "../../assets/ellipse.svg";
import notFound from "../../assets/not-found.svg";
import { initialNewsCards } from "../../utils/constants";
import NewsCard from "../NewsCard/NewsCard";

function Preloader() {
  return (
    <div className="preloader">
      {/* <div className="prelaoder__loading">
        <img
          className="preloader__circle-preloader"
          src={ellipse}
          alt="loading"
        />
        <p className="prelaoder__text">Searching for news...</p>
      </div> */}

      {/* <div className="preloader__reuslts">
        <div className="prelaoder__no-results">
          <img className="preloader__icon" src={notFound} alt="loading" />
          <h2 className="preloader__header">Nothing Found</h2>
          <p className="prelaoder__text">Sorry, but nothing matched</p>
          <p className="prelaoder__text"> your results.</p>
        </div>
      </div> */}

      <div className="prelaoder__results">
        <h2 className="news-cards__results-header">Search Results</h2>
        <ul className="news-cards">
          {initialNewsCards.map((card, index) => (
            <NewsCard key={index} card={card} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Preloader;
