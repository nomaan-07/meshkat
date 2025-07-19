import { LucideFilter } from "lucide-react";
import { useState } from "react";
import TableOperationButton from "../buttons/TableOperationButton";
import FilterModal from "./FilterModal";

function Filter() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleIsOpen() {
    setIsOpen((prev) => !prev);
  }

  return (
    <TableOperationButton
      icon={LucideFilter}
      onClick={toggleIsOpen}
      text="فیلتر"
    >
      {isOpen && <FilterModal />}
    </TableOperationButton>
  );
}

export default Filter;
