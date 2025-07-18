import Pagination from "../ui/tables/Pagination";
import Table from "../ui/tables/Table";
import TableOperations from "../ui/tables/TableOperations";

function Users() {
  // FIXME: Move the table to features/UsersTable and use usersTable here
  return (
    <div className="space-y-4 divide-y divide-slate-200 rounded-md bg-white p-4">
      <TableOperations />
      <Table />
      <Pagination />
    </div>
  );
}

export default Users;
