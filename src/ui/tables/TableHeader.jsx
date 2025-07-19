function TableHeader({ children, cols }) {
  return (
    <header
      className={`font-iranDemiBold grid border-b border-b-slate-200 bg-slate-100 text-slate-600 select-none *:p-2 *:not-last:border-l *:not-last:border-l-slate-200`}
      style={{ gridTemplateColumns: cols }}
      role="row"
    >
      {children}
    </header>
  );
}

export default TableHeader;
