import "./ArticleSection.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import NewsCard from "../NewsCard/NewsCard";

function ArticleSection() {
  return (
    <main>
      <Header />
      <p>Saved articles </p>
      <h1>Elise, you have 5 saved articles</h1>
      <span>keywords: filler, filler, filler</span>
      <NewsCard />
      <Footer />
    </main>
  );
}

export default ArticleSection;
