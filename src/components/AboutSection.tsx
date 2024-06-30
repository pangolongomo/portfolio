import ContentGroup from "./ui/ContentGroup";
import SectionContainer from "./ui/SectionContainer";

function AboutSection() {
  return (
    <SectionContainer id="about" title="About Me" subtitle="Get To Know More">
      <div className="w-2/3 flex flex-col gap-8">
        <div className="flex items-center justify-center flex-col md:flex-row gap-8">
          <ContentGroup>
            <div className="text-center text-zinc-700">
              <h4 className="font-bold text-2xl text-black">Experience</h4>
              <p>2+ Years</p>
              <p>Frontend Development</p>
            </div>
          </ContentGroup>
          <ContentGroup>
            <div className="text-center text-zinc-700">
              <h4 className="font-bold text-2xl text-black">Education</h4>
              <p>B.Sc. Bachelors Degree</p>
              <p>Kadea</p>
            </div>
          </ContentGroup>
        </div>
        <p className="text-zinc-700">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem velit
          reiciendis, ullam rem enim tempora dignissimos beatae mollitia neque
          eum ad tempore adipisci. Aliquam reprehenderit laboriosam voluptatem
          dolore porro quia?
        </p>
      </div>
    </SectionContainer>
  );
}

export default AboutSection;
