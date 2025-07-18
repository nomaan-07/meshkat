import { JSX } from "react";
import { NavLink } from "react-router";

function NavItem({ name, icon, path }) {
  return (
    <NavLink
      to={path}
      className="nav-link flex items-center gap-4 rounded-full px-4 py-2.5 font-medium capitalize transition-colors select-none md:hover:bg-primary md:hover:text-white"
    >
      {icon}
      <span>{name}</span>
    </NavLink>
  );
}

export default NavItem;
