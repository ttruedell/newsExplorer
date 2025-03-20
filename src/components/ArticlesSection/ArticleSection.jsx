import "./ArticleSection.css";
import NewsCard from "../NewsCard/NewsCard";

function ArticleSection() {
  return (
    <main>
      <p>Saved articles </p>
      <h1>Elise, you have 5 saved articles</h1>
      <span>keywords: filler, filler, filler</span>
      <NewsCard />
    </main>
  );
}

export default ArticleSection;
