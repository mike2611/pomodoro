import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Footer = () => (
<footer class="text-center text-lg-start bg-dark text-muted footer-container">
  <section
    class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom"
  >
    <div class="me-5 mt-1 d-none d-lg-block">
      <span>Get connected with me:</span>
    </div>
    <div>
      <a href="https://www.linkedin.com/in/miguel-puentes-mata/" class="me-4 text-reset">
        <FaLinkedin  class="me-2 h3"/> Miguel Puentes Mata
      </a>
      <a href="https://github.com/mike2611" class="me-4 text-reset">
        <FaGithub class="me-2 h3"/> mike2611
      </a>
    </div>
  </section>
</footer>
);

export default (Footer);