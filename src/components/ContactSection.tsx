import { IoMailOpenOutline } from "react-icons/io5";
import SectionContainer from "./ui/SectionContainer";
import { FaLinkedinIn } from "react-icons/fa6";
import ContentGroup from "./ui/ContentGroup";

function ContactSection() {
  return (
    <SectionContainer subtitle="Get in Touch" title="Contact Me">
      <ContentGroup>
        <ul className="flex gap-3 md:gap-8 flex-col md:flex-row">
          {contactList.map((item) => (
            <li key={item.link} className="flex items-center gap-2">
              <item.icon size={20} />
              <span>{item.link}</span>
            </li>
          ))}
        </ul>
      </ContentGroup>
    </SectionContainer>
  );
}

export default ContactSection;

const contactList = [
  {
    link: "pangolongomo@gmail.com",
    icon: IoMailOpenOutline,
  },
  {
    link: "LinkedIn",
    icon: FaLinkedinIn,
  },
];
