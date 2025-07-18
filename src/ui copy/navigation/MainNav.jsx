import { navLinks } from "../../data/navLinks";
import NavItem from "./NavItem";

function MainNav() {
  return (
    <div className="grow space-y-3">
      {navLinks.map((item) => (
        <NavItem
          name={item.name}
          icon={item.icon}
          path={item.path}
          key={item.name}
        />
      ))}
    </div>
  );
}

export default MainNav;
