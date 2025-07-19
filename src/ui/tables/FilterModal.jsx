import FilterOptionButton from "../buttons/FilterOptionButton";

function FilterModal() {
  return (
    <div className="absolute top-9 left-0 z-100 pt-2">
      <div className="min-w-max rounded-md border border-slate-200 bg-white">
        <FilterOptionButton>فیلتر تستی</FilterOptionButton>
        <FilterOptionButton>فیلتر تستی</FilterOptionButton>
        <FilterOptionButton>فیلتر تستی</FilterOptionButton>
      </div>
    </div>
  );
}

export default FilterModal;
