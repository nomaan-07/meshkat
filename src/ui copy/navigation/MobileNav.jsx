import { navLinks } from "../../data/navLinks";
import MobileNavItem from "./MobileNavItem";

function MobileNav() {
  return (
    <div className="xs:h-18 fixed right-0 bottom-0 left-0 z-60 flex h-16 items-center justify-between bg-white p-4 shadow lg:hidden">
      {navLinks.map((item) => (
        <MobileNavItem
          name={item.name}
          icon={item.icon}
          path={item.path}
          key={item.name}
        />
      ))}
    </div>
  );
}

export default MobileNav;
