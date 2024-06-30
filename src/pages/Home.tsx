import { FaLinkedinIn } from "react-icons/fa6";
import { IoMailOpenOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Hero from "../components/Hero";
import AboutSection from "../components/AboutSection";
import ExperienceSection from "../components/ExperienceSection";

function Home() {
  return (
    <div>
      <div className="container mx-auto">
        <Header />
        <main>
          <Hero />
          <AboutSection />
          <ExperienceSection />

          <section id="projects">
            <h3>
              <span>Browse My Recent</span>
              <span>Projects</span>
            </h3>
            <div>
              <div>
                <img src="" alt="" />
                <h4>Project One</h4>
                <button>Github</button>
                <button>Demo</button>
              </div>
              <div>
                <img src="" alt="" />
                <h4>Project Two</h4>
                <button>Github</button>
                <button>Demo</button>
              </div>
              <div>
                <img src="" alt="" />
                <h4>Project Three</h4>
                <button>Github</button>
                <button>Demo</button>
              </div>
            </div>
          </section>
          <section id="contact">
            <h3>
              <span>Get in Touch</span>
              <span>Contact Me</span>
            </h3>
            <div>
              <ul>
                <li>
                  <IoMailOpenOutline />
                  <span>pangolongomo@gmail.com</span>
                </li>
                <li>
                  <FaLinkedinIn />
                  <span>LinkedIn</span>
                </li>
              </ul>
            </div>
          </section>
        </main>
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
            Copyright &copy; {new Date().getFullYear()} Ghislain Pango. All
            Rights Reserved.
          </p>
        </footer>
      </div>
    </div>
  );
}

export default Home;
