import { NavLink } from "react-router";

function MobileNavItem({ name, icon, path }) {
  return (
    <NavLink
      to={path}
      className="flex flex-col items-center justify-center gap-1 text-[10px] xs:text-xs capitalize select-none mobile-nav-link xs:size-auto relative size-10 text-slate-400"
    >
      {icon}
      <span>{name}</span>
      <span className="line -top-3 xs:-top-4 absolute hidden w-6 xs:w-8 h-1 rounded-2xl border-slate-100 bg-primary"></span>
    </NavLink>
  );
}

export default MobileNavItem;
