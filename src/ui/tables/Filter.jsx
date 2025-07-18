import { LucideFilter } from "lucide-react";
import { useState } from "react";
import TableOperationButton from "../buttons/TableOperationButton";
import Overlay from "../common/Overlay";
import FilterModal from "./FilterModal";

function Filter() {
  const [isOpen, setIsOpen] = useState(false);

  function handleOpen() {
    setIsOpen(true);
  }
  function handleClose() {
    setIsOpen(false);
  }

  return (
    <TableOperationButton icon={LucideFilter} onClick={handleOpen} text="فیلتر">
      {isOpen && (
        <>
          <FilterModal />
          <Overlay isOpen={isOpen} onClose={handleClose} />
        </>
      )}
    </TableOperationButton>
  );
}

export default Filter;
