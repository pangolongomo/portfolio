import { useState } from "react";
import { HiMiniBars3 } from "react-icons/hi2";
import { LiaTimesSolid } from "react-icons/lia";
import { Link } from "react-router-dom";
import { navRoutes } from "../sitemap";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="flex justify-between items-center py-6 px-4 md:px-0">
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
          <ul className="flex md:gap-4 text-lg flex-col md:flex-row">
            {navRoutes.map((navElement) => (
              <Link
                key={navElement.name}
                to={navElement.path}
                className="group md:hover:text-gray-500 px-4 hover:bg-gray-200 md:hover:bg-inherit"
              >
                <li className="md:border-b-2 border-transparent py-2 md:py-1 group-hover:border-gray-500">
                  {navElement.name}
                </li>
              </Link>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
