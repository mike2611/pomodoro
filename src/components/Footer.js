import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Footer = () => (
<footer className="text-center text-lg-start bg-dark text-muted footer-container">
  <section
    className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom"
  >
    <div className="me-5 mt-1 d-none d-lg-block">
      <span>Get connected with me:</span>
    </div>
    <div>
      <a href="https://www.linkedin.com/in/miguel-puentes-mata/" className="me-4 text-reset">
        <FaLinkedin  className="me-2 h3"/> Miguel Puentes
      </a>
      <a href="https://github.com/mike2611" className="me-4 text-reset">
        <FaGithub className="me-2 h3"/>  <span className="d-none d-md-inline">mike2611</span>
      </a>
    </div>
  </section>
</footer>
);

export default (Footer);