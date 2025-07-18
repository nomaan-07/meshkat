import TableHeader from "./TableHeader";
import TableRow from "./TableRow";

function Table() {
  return (
    <div role="table">
      <TableHeader role="row"></TableHeader>
      <TableRow role="row"></TableRow>
    </div>
  );
}

export default Table;
