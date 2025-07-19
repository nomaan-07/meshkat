import { Link, Outlet } from "react-router-dom";
import Header from "../navigation/Header";
import MobileNav from "../navigation/MobileNav";
import Sidebar from "../navigation/Sidebar";

function AppLayout() {
  return (
    <div className="mx-auto max-w-[1440px] p-8">
      <div className="lg:grid lg:grid-cols-[17.5rem_1fr] lg:gap-8">
        <section>
          <Sidebar />
        </section>
        <section className="space-y-8 overflow-x-auto">
          <Header />
          <main className="space-y-6 md:space-y-8">
            <Outlet />
          </main>
        </section>
      </div>
      <MobileNav />
    </div>
  );
}

export default AppLayout;
