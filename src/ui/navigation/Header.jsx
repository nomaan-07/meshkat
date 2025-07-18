import { LucideUserCog } from "lucide-react";
import Logo from "./Logo";
import { Link } from "react-router-dom";
import Heading from "../layout/Heading";

function Header() {
  return (
    <header className="fixed top-0 right-0 left-0 z-60 flex h-20 items-center justify-between bg-white px-4 sm:px-8 lg:top-4 lg:left-4 lg:rounded-4xl lg:right-78 lg:px-12 lg:py-4 lg:border lg:border-primary/30">
      <Logo className="lg:hidden" />
      <Heading as="h3" className="hidden lg:block">
        پنل مدیریت
      </Heading>
      <Link
        to="/account"
        className="rounded-full flex items-center justify-center size-14 text-slate-600 bg-slate-100 md:hover:text-white md:hover:bg-primary transition-colors"
      >
        <LucideUserCog className="size-8" strokeWidth={1.5} />
      </Link>
    </header>
  );
}

export default Header;
