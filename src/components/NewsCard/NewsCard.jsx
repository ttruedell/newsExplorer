import "./NewsCard.css";
import remove from "../../assets/trash.jpg";
import placeholder from "../../assets/random-image-1.jpg";

function NewsCard() {
  return (
    // <div>
    //   <h1>Placeholder</h1>
    //   <p>
    //     Lorem ipsum dolor sit amet. Ut repellendus voluptatum sed unde
    //     dignissimos qui quos reprehenderit aut neque ipsa. At officiis officiis
    //     eum voluptates provident ad voluptates officia hic officia numquam. Est
    //     error nemo ut dolorem porro sit fugit neque ea ratione voluptate ea quod
    //     possimus et sunt laborum. Ab exercitationem quod qui molestias
    //     consectetur id odio nihil ea sint voluptates. Et voluptas quam est
    //     ducimus quae et voluptatem quam vel numquam optio a tempore ducimus?
    //   </p>
    // </div>

    <li className="news-card">
      <div className="news-card__header-container">
        <h2 className="news-card__keyword">example</h2>
        <h2 className="news-card__confirm-remove">Remove from saved</h2>

        <button className="news-card__remove-btn">
          <img src={remove} alt="remove-icon" />
        </button>
      </div>
      <div>
        <img
          className="news-card__image"
          src={placeholder}
          alt="article-image"
        />
        <article className="news-card__article">
          <p className="news-card__date">November 8, 2024</p>
          <h2 className="news-card__title">Placeholder</h2>
          <p className="news-card__text">
            Lorem ipsum dolor sit amet. Ut repellendus voluptatum sed unde
            dignissimos qui quos reprehenderit aut neque ipsa. At officiis
            officiis eum voluptates provident ad voluptates officia hic officia
            numquam. Est error nemo ut dolorem porro sit fugit neque ea ratione
            voluptate ea quod possimus et sunt laborum. Ab exercitationem quod
            qui molestias consectetur id odio nihil ea sint voluptates. Et
            voluptas quam est ducimus quae et voluptatem quam vel numquam optio
            a tempore ducimus?
          </p>
          <h3 className="news-card__author">National Geographic</h3>
        </article>
      </div>
    </li>
  );
}

export default NewsCard;
