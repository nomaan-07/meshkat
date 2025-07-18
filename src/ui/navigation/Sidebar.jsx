import Logout from "../../features/authentication/Logout";
import UserProfile from "../../features/authentication/UserProfile";
import Logo from "./Logo";
import MainNav from "./MainNav";

function Sidebar() {
  return (
    <aside className="fixed top-4 right-4 bottom-4 hidden w-70 flex-col justify-between gap-y-8 overflow-y-auto rounded-md bg-white p-8 lg:flex">
      <div className="flex items-center justify-between border-b border-b-slate-200 pb-8">
        <UserProfile />
        <Logo />
      </div>
      <MainNav />
      <Logout />
    </aside>
  );
}

export default Sidebar;
