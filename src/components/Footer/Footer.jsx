import "./Footer.css";

import { Link } from "react-router-dom";

import github from "../../assets/github.svg";
import social from "../../assets/fb.svg";

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__copyright">@ 2025 Supersite, Powered by News API</p>
      <ul className="footer__links">
        <div className="footer__row-one">
          <li>
            <Link to="/" className="footer__link footer__link_home">
              Home
            </Link>
          </li>
          <li>
            <a
              href="https://tripleten.com/"
              className="footer__link footer__link_TripleTen"
            >
              TripleTen
            </a>
          </li>
          {/* <li className="footer__link footer__link_github">
          <img src={github} alt="github-icon" />
        </li>
        <li className="footer__link footer__link_facebook">
          <img src={social} alt="social-icon" />
        </li> */}
        </div>
        <div className="footer__row-two">
          <li className="footer__link footer__link_github">
            <a href="https://github.com/ttruedell/newsExplorer">
              <img src={github} alt="github-icon" />
            </a>
          </li>
          <li className="footer__link footer__link_facebook">
            <img src={social} alt="social-icon" />
          </li>
        </div>
      </ul>
    </footer>
  );
}

export default Footer;
