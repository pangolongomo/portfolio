import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <nav>
        <ul>
          <Link to="#about">
            <li>About</li>
          </Link>
          <Link to="#experience">
            <li>Experience</li>
          </Link>
          <Link to="#projects">
            <li>Projects</li>
          </Link>
          <Link to="#contact">
            <li>Contact</li>
          </Link>
        </ul>
      </nav>
      <p>
        Copyright &copy; {new Date().getFullYear()} Ghislain Pango. All Rights
        Reserved.
      </p>
    </footer>
  );
}

export default Footer;
