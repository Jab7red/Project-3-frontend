import './Footer.scss'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { BiRun } from 'react-icons/bi'


const Footer = (props) => {
    return (
      <footer>
        <div className="footer-box">
          <div className="dt-about-box">
            <a href="/about">
              <h4>About</h4>
            </a>
          </div>

          <div className="mob-name-box">
            <a
              href="https://www.linkedin.com/in/jaredbradley95/"
              target="_blank"
            >
              <FaLinkedin />
              Jared Bradley
            </a>
            <a href="https://www.linkedin.com/in/jwsmith2340/" target="_blank">
              <FaLinkedin />
              James Smith
            </a>
            <a
              href="https://www.linkedin.com/in/micah-lou%C3%ADs-stewart/"
              target="_blank"
            >
              <FaLinkedin />
              Micah Stewart
            </a>
          </div>

          <div className="mob-repo-box">
            <a
              href="https://github.com/Jab7red/Project-3-frontend"
              target="_blank"
            >
              <FaGithub /> Frontend{" "}
            </a>
            <a
              href="https://github.com/Micahlou/RecipeApp-Backend"
              target="_blank"
            >
              <FaGithub /> Backend{" "}
            </a>
          </div>
        </div>
      </footer>
    );
};

export default Footer;