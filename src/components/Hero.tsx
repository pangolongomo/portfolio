import { FaGithub, FaLinkedinIn } from "react-icons/fa6";

function Hero() {
  return (
    <section id="hero" className="flex gap-[4rem] items-center">
      <div className="flex-1 flex items-center justify-end">
        <img
          src="/assets/img/hero_01.jpg"
          alt=""
          className="w-1/2 rounded-full"
        />
      </div>
      <div className="flex-1">
        <h3>
          <span>Hello I'm</span>
          <span>Ghislain Pango</span>
        </h3>
        <p>Frontend Developer</p>
        <div>
          <button>Download CV</button>
          <button>Contact Info</button>
        </div>
        <div>
          <a href="https://www.linkedin.com/in/ghislainpango/" target="_blank">
            <FaLinkedinIn />
          </a>
          <a href="https://github.com/pangolongomo" target="_blank">
            <FaGithub />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
