function SectionTitle({
  subtitle,
  title,
}: {
  subtitle: string;
  title: string;
}) {
  return (
    <div>
      <h3 className="text-sm text-center w-full flex flex-col gap-2 justify-center">
        <span className="text-zinc-600 font-semibold text-md">{subtitle}</span>
        <span className="text-5xl font-bold ">{title}</span>
      </h3>
    </div>
  );
}

export default SectionTitle;
