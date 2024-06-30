import { PropsWithChildren } from "react";

function ContentGroup({ children }: PropsWithChildren) {
  return (
    <div className="rounded-3xl border-zinc-400 border-2 md:px-14 py-6 w-full">
      {children}
    </div>
  );
}

export default ContentGroup;
