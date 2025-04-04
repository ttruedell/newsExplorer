import "./ArticleSection.css";
import NewsCard from "../NewsCard/NewsCard";
import { initialNewsCards } from "../../utils/constants";

function ArticleSection() {
  return (
    <main className="articles">
      <div className="articles__top-bar">
        <p className="articles__subheading">Saved articles </p>
        <h1 className="articles__heading">Elise, you have 5 saved articles</h1>
        <p className="articles__keywords">
          By keywords: filler, filler, filler
        </p>
      </div>
      <ul className="news-cards">
        {initialNewsCards.map((card, index) => (
          <NewsCard key={index} card={card} />
        ))}
      </ul>
    </main>
  );
}

export default ArticleSection;
