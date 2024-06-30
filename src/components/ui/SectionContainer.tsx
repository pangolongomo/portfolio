import { PropsWithChildren } from "react";
import SectionTitle from "./SectionTitle";
interface SectionType {
  subtitle: string;
  title: string;
}
function SectionContainer({
  children,
  subtitle,
  title,
  ...rest
}: PropsWithChildren<SectionType>) {
  return (
    <section
      className="flex flex-col gap-10 items-center justify-center py-12"
      {...rest}
    >
      <SectionTitle subtitle={subtitle} title={title} />
      {children}
    </section>
  );
}

export default SectionContainer;
