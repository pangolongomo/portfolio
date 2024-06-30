import { FaLinkedinIn } from "react-icons/fa6";
import { IoMailOpenOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Hero from "../components/Hero";
import AboutSection from "../components/AboutSection";

function Home() {
  return (
    <div>
      <div className="container mx-auto">
        <Header />
        <main>
          <Hero />
          <AboutSection />
          <section id="experience">
            <h3>
              <span>Explore My</span>
              <span>Experience</span>
            </h3>
            <div>
              <div>
                <h4>Frontend Development</h4>
                <div>
                  <div>
                    <h5>HTML</h5>
                    <p>Experienced</p>
                  </div>
                  <div>
                    <h5>CSS</h5>
                    <p>Experienced</p>
                  </div>
                  <div>
                    <h5>SASS</h5>
                    <p>Intermediate</p>
                  </div>
                  <div>
                    <h5>JavaScript</h5>
                    <p>Experienced</p>
                  </div>
                  <div>
                    <h5>TypeScript</h5>
                    <p>Experienced</p>
                  </div>
                  <div>
                    <h5>Tailwind</h5>
                    <p>Experienced</p>
                  </div>
                </div>
              </div>
              <div>
                <h4>Backend Development</h4>
                <div>
                  <div>
                    <h5>PostgreSQL</h5>
                    <p>Experienced</p>
                  </div>
                  <div>
                    <h5>Node JS</h5>
                    <p>Experienced</p>
                  </div>
                  <div>
                    <h5>Express JS</h5>
                    <p>Intermediate</p>
                  </div>
                  <div>
                    <h5>Git</h5>
                    <p>Experienced</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
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
