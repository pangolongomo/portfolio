import { Link } from "react-router-dom";
import { navRoutes } from "../sitemap";

function NavItems() {
  return (
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
  );
}

export default NavItems;
