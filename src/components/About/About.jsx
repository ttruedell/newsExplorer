import "./About.css";
import creator from "../../assets/placeholder-image.jpg";

function About() {
  return (
    <section>
      <img src={creator} alt="creator_image" className="about__image" />
      <div>
        <h1>About the Author</h1>
        <p>
          This block describes the project author. Here you should indicate your
          name, what you do, and which development technologies you know.
        </p>
        <p>
          You can also talk about your experience with TripleTen, what you
          learned there, and how you can help potential customers.
        </p>
      </div>
    </section>
  );
}

export default About;
