import { LucideUserCog } from "lucide-react";
import Logo from "./Logo";
import { Link } from "react-router-dom";
import Heading from "../layout/Heading";
import HeaderTitle from "./HeaderTitle";

function Header() {
  return (
    <header className="fixed top-0 right-0 left-0 z-60 flex h-20 items-center justify-between bg-white px-4 sm:px-8 lg:top-4 lg:right-78 lg:left-4 lg:rounded-md lg:px-12 lg:py-4">
      <Logo className="lg:hidden" />
      <HeaderTitle />
      <Link
        to="/account"
        className="md:hover:text-primary focus:ring-primary flex size-14 items-center justify-center rounded-md border border-slate-200 bg-slate-100 text-slate-600 transition-colors focus:ring-1 focus:outline-none md:hover:bg-slate-200"
      >
        <LucideUserCog className="size-8" strokeWidth={1.5} />
      </Link>
    </header>
  );
}

export default Header;
