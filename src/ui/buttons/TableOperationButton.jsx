function TableOperationButton({ children, icon: Icon, onClick, text }) {
  return (
    <div className="relative inline-block select-none">
      <button
        className="md:hover:text-primary relative flex items-center justify-center gap-1 rounded-md border border-slate-200 bg-slate-100 px-1 py-2 text-xs text-slate-600 transition-colors sm:gap-2 sm:px-2 sm:text-sm md:cursor-pointer md:hover:bg-slate-200"
        onClick={onClick}
      >
        {Icon && <Icon className="size-4" />}
        {text}
      </button>
      {children}
    </div>
  );
}

export default TableOperationButton;
