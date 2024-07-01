import Button from "./ui/Button";
import ContentGroup from "./ui/ContentGroup";
import SectionContainer from "./ui/SectionContainer";

function ProjectsSection() {
  return (
    <SectionContainer subtitle="Browse My Recent" title="Projects">
      <div className="flex gap-4 flex-wrap justify-center">
        {projectList.map((item, index) => (
          <ContentGroup key={index}>
            <div className="flex flex-col gap-4">
              <div className="w-full aspect-square bg-zinc-200 rounded-3xl overflow-hidden">
                <img src="" alt="" />
              </div>
              <h4 className="text-center font-bold text-xl">{item.name}</h4>
              <div className="flex gap-2 justify-center">
                <Button type="filled">Github</Button>
                <Button>Demo</Button>
              </div>
            </div>
          </ContentGroup>
        ))}
      </div>
    </SectionContainer>
  );
}

export default ProjectsSection;

interface ProjectList {
  name: string;
  githubLink: string;
  demoLink: string;
}

const projectList: ProjectList[] = [
  { name: "Project One", githubLink: "#string", demoLink: "#string" },
  { name: "Project Two", githubLink: "#string", demoLink: "#string" },
  { name: "Project Three", githubLink: "#string", demoLink: "#string" },
];
