import { LucideSearch } from "lucide-react";
import { useState } from "react";
import TableOperationButton from "../buttons/TableOperationButton";
import Overlay from "../common/Overlay";
import Input from "../forms/Input";

function Search() {
  const [isOpen, setIsOpen] = useState(false);

  function handleOpen() {
    setIsOpen(true);
  }
  function handleClose() {
    setIsOpen(false);
    console.log(isOpen);
  }

  return (
    <TableOperationButton icon={LucideSearch} text="جستجو" onClick={handleOpen}>
      {isOpen && (
        <>
          <div className="absolute top-9 right-0 z-100 pt-2">
            <div className="w-xs">
              <Input type="search" placeholder="نام، ایمیل، همراه و ..." />
            </div>
          </div>
          <Overlay isOpen={isOpen} onClose={handleClose} />
        </>
      )}
    </TableOperationButton>
  );
}
export default Search;
