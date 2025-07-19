import { LucideUserCog } from "lucide-react";
import { Link } from "react-router-dom";
import Logout from "../../features/authentication/Logout";

function HeaderButtons() {
  return (
    <div className="flex items-center gap-2">
      <Link
        to="/account"
        className="md:hover:text-primary flex size-12 shrink-0 items-center justify-center rounded-md border border-slate-200 bg-slate-100 text-slate-600 transition-colors md:size-14 md:hover:bg-slate-200"
      >
        <LucideUserCog className="size-7 md:size-8" strokeWidth={1.5} />
      </Link>
      <Logout isHeader={true} />
    </div>
  );
}

export default HeaderButtons;
