function FilterOptionButton({ children }) {
  return (
    <button className="md:hover:text-primary block cursor-pointer p-2 text-sm transition-colors md:cursor-pointer md:hover:bg-slate-100">
      {children}
    </button>
  );
}

export default FilterOptionButton;
