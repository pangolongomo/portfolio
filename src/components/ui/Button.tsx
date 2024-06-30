import { PropsWithChildren } from "react";

interface ButtonType {
  type?: "outlined" | "filled";
}

function Button({
  type = "outlined",
  children,
}: PropsWithChildren<ButtonType>) {
  return (
    <button
      className={`border-2 border-zinc-700 rounded-full px-4 py-3 font-semibold hover:text-white ${
        type === "outlined" ? "hover:bg-zinc-700" : ""
      } ${type === "filled" && "text-white bg-zinc-700 hover:bg-black"}`}
    >
      {children}
    </button>
  );
}

export default Button;
