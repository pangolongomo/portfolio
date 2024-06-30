import { IoMailOpenOutline } from "react-icons/io5";
import SectionContainer from "./ui/SectionContainer";
import { FaLinkedinIn } from "react-icons/fa6";

function ContactSection() {
  return (
    <SectionContainer subtitle="Get in Touch" title="Contact Me">
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
    </SectionContainer>
  );
}

export default ContactSection;
