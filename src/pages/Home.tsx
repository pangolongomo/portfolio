import { FaLinkedinIn } from "react-icons/fa6";
import { IoMailOpenOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Hero from "../components/Hero";
import AboutSection from "../components/AboutSection";
import ExperienceSection from "../components/ExperienceSection";
import ProjectsSection from "../components/ProjectsSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

function Home() {
  return (
    <div>
      <div className="container mx-auto">
        <Header />
        <main>
          <Hero />
          <AboutSection />
          <ExperienceSection />

          <ProjectsSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
