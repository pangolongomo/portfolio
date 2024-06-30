import { IconType } from "react-icons";
import ContentGroup from "./ui/ContentGroup";
import SectionContainer from "./ui/SectionContainer";

import {
  FaCss3Alt,
  FaGitAlt,
  FaHtml5,
  FaNodeJs,
  FaSass,
} from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { SiExpress, SiTypescript } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { BiLogoPostgresql } from "react-icons/bi";

function ExperienceSection({ ...rest }) {
  return (
    <SectionContainer subtitle="Explore My" title="Experience" {...rest}>
      <div className="w-full flex gap-8 flex-col md:flex-row">
        {experienceKind.map((group) => (
          <ContentGroup key={group.title}>
            <div className="flex flex-col gap-6 px-4">
              <h4 className="text-center text-zinc-600 text-2xl font-bold">
                {group.title}
              </h4>
              <div className="flex flex-wrap gap-4 m-0 p-0">
                {group.list.map((item) => (
                  <div
                    key={item.technologyName}
                    className="p-2 flex gap-2 items-center"
                  >
                    {item.Icon && <item.Icon size={35} color={item.color} />}
                    <div>
                      <h5 className="font-bold">{item.technologyName}</h5>
                      <p className="text-zinc-500">{item.level}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ContentGroup>
        ))}
      </div>
    </SectionContainer>
  );
}

export default ExperienceSection;

interface ExperienceList {
  technologyName: string;
  Icon?: IconType;
  color?: string;
  level: "basic" | "intermediate" | "experienced";
}

interface ExperienceKind {
  title: string;
  list: ExperienceList[];
}

const experienceKind: ExperienceKind[] = [
  {
    title: "Frontend Development",
    list: [
      {
        technologyName: "HTML",
        level: "experienced",
        Icon: FaHtml5,
        color: "e34f26",
      },
      {
        technologyName: "CSS",
        level: "experienced",
        Icon: FaCss3Alt,
        color: "214ee5",
      },
      {
        technologyName: "SASS",
        level: "intermediate",
        Icon: FaSass,
        color: "cf649a",
      },
      {
        technologyName: "JavaScript",
        level: "experienced",
        Icon: IoLogoJavascript,
        color: "f5dc1d",
      },
      {
        technologyName: "TypeScript",
        level: "experienced",
        Icon: SiTypescript,
        color: "3178c6",
      },
      {
        technologyName: "Tailwind",
        level: "experienced",
        Icon: RiTailwindCssFill,
        color: "38bdf8",
      },
    ],
  },
  {
    title: "Backend Development",
    list: [
      {
        technologyName: "PostgreSQL",
        level: "experienced",
        Icon: BiLogoPostgresql,
        color: "326590",
      },
      {
        technologyName: "NodeJS",
        level: "experienced",
        Icon: FaNodeJs,
        color: "86cc23",
      },
      { technologyName: "ExpressJS", level: "intermediate", Icon: SiExpress },
      {
        technologyName: "Git",
        level: "experienced",
        Icon: FaGitAlt,
        color: "f54d27",
      },
    ],
  },
];
