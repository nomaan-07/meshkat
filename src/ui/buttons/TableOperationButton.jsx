function TableOperationButton({ children, icon: Icon, onClick, text }) {
  return (
    <div className="relative inline-block">
      <button
        className="xs:px-2 xs:gap-2 md:hover:text-primary xs:text-sm focus:ring-primary relative flex items-center justify-center gap-1 rounded-md border border-slate-200 bg-slate-100 px-1 py-2 text-xs text-slate-600 transition-colors focus:ring-1 focus:outline-none md:cursor-pointer md:hover:bg-slate-200"
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
