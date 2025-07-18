import Logout from "../../features/authentication/Logout";
import UserProfile from "../../features/authentication/UserProfile";
import Logo from "./Logo";
import MainNav from "./MainNav";

function Sidebar() {
  return (
    <aside className="fixed top-4 bottom-4 right-4 hidden w-70 flex-col justify-between gap-y-8 overflow-y-auto bg-white p-8 lg:flex border border-primary/30 rounded-4xl">
      <div className="flex items-center justify-between pb-8 border-b border-b-primary/30">
        <UserProfile />
        <Logo />
      </div>
      <MainNav />
      <Logout />
    </aside>
  );
}

export default Sidebar;
