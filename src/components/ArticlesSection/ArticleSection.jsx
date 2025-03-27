import "./ArticleSection.css";
import NewsCard from "../NewsCard/NewsCard";

function ArticleSection() {
  return (
    <main className="articles">
      <div className="articles__top-bar">
        <p className="articles__subheading">Saved articles </p>
        <h1 className="articles__heading">Elise, you have 5 saved articles</h1>
        <p className="articles__keywords">keywords: filler, filler, filler</p>
      </div>
      <NewsCard />
    </main>
  );
}

export default ArticleSection;
