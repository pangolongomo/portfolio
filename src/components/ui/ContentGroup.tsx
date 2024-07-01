import { PropsWithChildren } from "react";

function ContentGroup({ children }: PropsWithChildren) {
  return (
    <div className="rounded-3xl border-zinc-400 border-2 p-6 flex-1">
      {children}
    </div>
  );
}

export default ContentGroup;
