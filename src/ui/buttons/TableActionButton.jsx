const baseStyles =
  "w-full flex items-center gap-2 px-2 py-2 text-xs text-slate-500 transition-colors md:cursor-pointer select-none";

const variations = {
  edit: "md:hover:bg-emerald-100 md:hover:text-emerald-600 ",
  delete: "md:hover:bg-rose-100 md:hover:text-rose-600",
};

function TableActionButton({ variation, label, children, onClick }) {
  const styles = `${baseStyles} ${variations[variation]}`;

  return (
    <button className={styles} onClick={onClick}>
      {children}
      <span>{label}</span>
    </button>
  );
}

export default TableActionButton;
