import AddUser from "./AddUser";
import Filter from "./Filter";
import FilterTags from "./FilterTags";
import Search from "./Search";
import Sort from "./Sort";

function TableOperations() {
  return (
    <div className="pb-4">
      <div className="flex flex-wrap justify-between gap-2 pb-2">
        <div className="flex gap-2">
          <Search />
          <AddUser />
        </div>
        <div className="flex gap-2">
          <Filter />

          <Sort />
        </div>
      </div>
      <FilterTags />
    </div>
  );
}

export default TableOperations;
