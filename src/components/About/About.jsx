import "./About.css";
import creator from "../../assets/placeholder-image.jpg";

function About() {
  return (
    <section className="about">
      <img src={creator} alt="creator_image" className="about__image" />
      <div className="about__content">
        <h2 className="about__header">About the Author</h2>
        <p className="about__descritption">
          {/* This block describes the project author. Here you should indicate your
          name, what you do, and which development technologies you know. */}
          My name is Tyson Truedell, a full-stack web developer passionate about
          building clean, responsive, and intuitive user experiences. I
          specialize in JavaScript, React, Node.js, and modern development tools
          like Vite and Git.
        </p>
        <br />
        <p className="about__descritption">
          {/* You can also talk about your experience with TripleTen, what you
          learned there, and how you can help potential customers. */}
          This project was created as part of the TripleTen Software Engineering
          program, where I honed my skills in frontend architecture,
          asynchronous programming, and user authentication. I'm committed to
          writing accessible, maintainable code and continually improving my
          craft to support real-world needs.
        </p>
      </div>
    </section>
  );
}

export default About;
