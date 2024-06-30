import { PropsWithChildren } from "react";
import SectionTitle from "./SectionTitle";
interface SectionType {
  id: string;
  subtitle: string;
  title: string;
}
function SectionContainer({
  children,
  id,
  subtitle,
  title,
}: PropsWithChildren<SectionType>) {
  return (
    <section
      id={id}
      className="flex flex-col gap-10 items-center justify-center py-12"
    >
      <SectionTitle subtitle={subtitle} title={title} />
      {children}
    </section>
  );
}

export default SectionContainer;
