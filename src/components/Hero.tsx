import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import Button from "./ui/Button";

function Hero() {
  return (
    <section
      id="hero"
      className="flex gap-[4rem] items-center py-8 flex-col md:flex-row"
    >
      <div className="flex-1 flex items-center justify-center md:justify-end">
        <img
          src="/assets/img/hero_01.jpg"
          alt=""
          className="w-1/2 md:w-2/3 rounded-full"
        />
      </div>
      <div className="flex-1 flex text-center">
        <div className="flex flex-col gap-5">
          <h3 className="flex flex-col">
            <span className="text-zinc-500 text-md md:text-lg">Hello I'm</span>
            <span className="font-bold text-4xl md:text-5xl">
              Ghislain Pango
            </span>
          </h3>
          <p className="text-zinc-500 font-bold text-4xl md:text-5xl">
            Frontend Developer
          </p>
          <div className="flex justify-center items-center gap-3">
            <Button>Download CV</Button>
            <Button type="filled">Contact Info</Button>
          </div>
          <div className="flex justify-center items-center gap-3">
            <a
              href="https://www.linkedin.com/in/ghislainpango/"
              target="_blank"
              className="bg-black rounded-full p-1 text-white hover:bg-zinc-800"
            >
              <FaLinkedinIn size={25} />
            </a>
            <a
              href="https://github.com/pangolongomo"
              target="_blank"
              className="hover:text-zinc-800"
            >
              <FaGithub size={35} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
