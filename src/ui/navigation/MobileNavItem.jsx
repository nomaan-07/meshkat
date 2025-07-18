import { NavLink } from "react-router";

function MobileNavItem({ name, icon, path }) {
  return (
    <NavLink
      to={path}
      className="xs:text-xs mobile-nav-link xs:size-auto relative flex size-10 flex-col items-center justify-center gap-1 text-[10px] text-slate-400 capitalize select-none"
    >
      {icon}
      <span>{name}</span>
      <span className="line xs:-top-4 xs:w-8 bg-primary absolute -top-3 hidden h-1 w-6 rounded-2xl border-slate-100"></span>
    </NavLink>
  );
}

export default MobileNavItem;
