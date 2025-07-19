import { LucideSearch } from "lucide-react";
import { useState } from "react";
import TableOperationButton from "../buttons/TableOperationButton";

function Search() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleIsOpen() {
    setIsOpen((prev) => !prev);
  }

  function handleCloseSearch() {
    setIsOpen(false);
  }

  return (
    <>
      <TableOperationButton
        icon={LucideSearch}
        text="جستجو"
        onClick={toggleIsOpen}
      ></TableOperationButton>

      {isOpen && (
        <>
          <div className="absolute top-0 right-0 z-100 flex h-[34px] w-full items-center overflow-hidden rounded-md border border-slate-200 text-xs *:h-full sm:h-[38px] sm:text-sm">
            <input
              className="grow bg-white pr-1 outline-none sm:pr-2"
              placeholder="نام، ایمیل، همراه و ..."
              type="text"
              maxLength={25}
            />
            <div
              className="md:hover:text-primary flex size-full w-9 items-center justify-center bg-slate-100 text-slate-600 md:cursor-pointer md:hover:bg-slate-200"
              onClick={handleCloseSearch}
            >
              <LucideSearch className="size-4" />
            </div>
          </div>
        </>
      )}
    </>
  );
}
export default Search;
