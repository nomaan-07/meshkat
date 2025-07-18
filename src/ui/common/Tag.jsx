import { X } from "lucide-react";

function Tag({ children }) {
  return (
    <div className="flex items-center justify-center gap-1 rounded-full border border-slate-200 bg-white p-1 text-xs text-slate-600 transition-colors md:cursor-pointer md:hover:text-rose-600">
      <X className="size-3.5" />
      <span>{children}</span>
    </div>
  );
}

export default Tag;
