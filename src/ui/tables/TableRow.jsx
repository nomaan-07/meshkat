function TableRow({ children, cols }) {
  return (
    <div
      className={`text-iranLight grid border-b border-b-slate-200 text-slate-600 *:p-2 *:not-last:border-l *:not-last:border-l-slate-200 md:hover:bg-slate-50`}
      style={{ gridTemplateColumns: cols }}
      role="row"
    >
      {children}
    </div>
  );
}

export default TableRow;
