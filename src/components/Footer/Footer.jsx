import "./Footer.css";

import github from "../../assets/github.svg";
import social from "../../assets/fb.svg";

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__copyright">@ 2025 Supersite, Powered by News API</p>
      <div>
        <ul className="footer__links">
          <li className="footer__link">Home</li>
          <li className="footer__link">TripleTen</li>
          <li className="footer__link">
            <img src={github} alt="github-icon" />
          </li>
          <li className="footer__link">
            <img src={social} alt="social-icon" />
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
