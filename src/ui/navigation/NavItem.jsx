import { NavLink } from "react-router";

function NavItem({ name, icon, path }) {
  return (
    <NavLink
      to={path}
      className="nav-link md:hover:text-primary focus:ring-primary flex items-center gap-4 rounded-md px-4 py-2.5 font-medium capitalize transition-colors select-none focus:ring-1 focus:outline-none md:hover:bg-slate-200"
    >
      {icon}
      <span>{name}</span>
    </NavLink>
  );
}

export default NavItem;
