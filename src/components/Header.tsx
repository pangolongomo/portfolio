import { useState } from "react";
import { HiMiniBars3 } from "react-icons/hi2";
import { LiaTimesSolid } from "react-icons/lia";
import NavItems from "./NavItems";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="flex justify-between items-center py-6">
      <h1 className="text-3xl">Ghislain Pango</h1>
      <div className="relative">
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen((prevIsOpen) => !prevIsOpen)}>
            {isOpen ? <LiaTimesSolid size={30} /> : <HiMiniBars3 size={30} />}
          </button>
        </div>
        <nav
          className={`${
            !isOpen && "hidden"
          } md:block absolute md:static right-0 bg-white md:bg-inherit`}
        >
          <NavItems />
        </nav>
      </div>
    </header>
  );
}

export default Header;
