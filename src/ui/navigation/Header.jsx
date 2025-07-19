import HeaderButtons from "./HeaderButtons";
import HeaderTitle from "./HeaderTitle";
import Logo from "./Logo";

function Header() {
  return (
    <header className="flex h-20 items-center justify-between bg-white px-4 shadow-sm shadow-slate-200 sm:px-8 lg:top-4 lg:right-78 lg:left-4 lg:rounded-md lg:px-12 lg:py-4">
      <Logo className="lg:hidden" variation="header" />
      <HeaderTitle />
      <HeaderButtons />
    </header>
  );
}

export default Header;
