import { LucideLogOut } from "lucide-react";
import Button from "../../ui/buttons/Button";

function Logout({ isHeader = false }) {
  return (
    <>
      {!isHeader && (
        <Button variant="danger" icon={LucideLogOut}>
          <span>خروج از حساب کاربری</span>
        </Button>
      )}

      {isHeader && (
        <div className="md:hover:text-primary flex size-12 shrink-0 items-center justify-center rounded-md border border-slate-200 bg-slate-100 text-slate-600 transition-colors md:size-14 lg:hidden">
          <LucideLogOut className="size-7 md:size-8" strokeWidth={1.5} />
        </div>
      )}
    </>
  );
}

export default Logout;
