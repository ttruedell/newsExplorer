import "./About.css";
import creator from "../../assets/placeholder-image.jpg";

function About() {
  return (
    <section className="about">
      <img src={creator} alt="creator_image" className="about__image" />
      <div className="about__content">
        <h2 className="about__header">About the Author</h2>
        <p className="about__descritption">
          This block describes the project author. Here you should indicate your
          name, what you do, and which development technologies you know.
        </p>
        <br />
        <p className="about__descritption">
          You can also talk about your experience with TripleTen, what you
          learned there, and how you can help potential customers.
        </p>
      </div>
    </section>
  );
}

export default About;
