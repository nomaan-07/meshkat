import { ArrowUpDown } from "lucide-react";
import { useState } from "react";
import TableOperationButton from "../buttons/TableOperationButton";
import FilterModal from "./FilterModal";

function Sort() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleIsOpen() {
    setIsOpen((prev) => !prev);
  }

  return (
    <TableOperationButton
      icon={ArrowUpDown}
      onClick={toggleIsOpen}
      text="دسته بندی"
    >
      {isOpen && <FilterModal />}
    </TableOperationButton>
  );
}

export default Sort;
