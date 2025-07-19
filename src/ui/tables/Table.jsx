import TableAction from "./TableAction";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";
import UserRole from "./UserRole";
import UserStatus from "./UserStatus";

const fakeUsers = [
  {
    id: "1",
    name: "احمد حسن زاده",
    phone: "09123456789",
    email: "ahmad.hassanzadeh@example.com",
    role: "admin",
    status: "confirmed",
  },
  {
    id: "2",
    name: "فاطمه محمدی",
    phone: "09129876543",
    email: "fateme.mohammadi@example.com",
    role: "student",
    status: "pending",
  },
  {
    id: "3",
    name: "رضا کریمی",
    phone: "09351234567",
    email: "reza.karimi@example.com",
    role: "teacher",
    status: "confirmed",
  },
  {
    id: "4",
    name: "نازنین صفری",
    phone: "09021234567",
    email: "nazanin.safari@example.com",
    role: "student",
    status: "rejected",
  },
  {
    id: "5",
    name: "علی احمدی",
    phone: "09191234567",
    email: "ali.ahmadi@example.com",
    role: "admin",
    status: "confirmed",
  },
  {
    id: "6",
    name: "زهرا رضایی",
    phone: "09361234567",
    email: "zahra.rezaei@example.com",
    role: "student",
    status: "confirmed",
  },
  {
    id: "7",
    name: "محمد حسینی",
    phone: "09107654321",
    email: "mohammad.hosseini@example.com",
    role: "teacher",
    status: "pending",
  },
  {
    id: "8",
    name: "سارا موسوی",
    phone: "09011234567",
    email: "sara.mousavi@example.com",
    role: "student",
    status: "confirmed",
  },
  {
    id: "9",
    name: "حسین نجفی",
    phone: "09121234567",
    email: "hossein.najafi@example.com",
    role: "student",
    status: "rejected",
  },
  {
    id: "10",
    name: "مریم قاسمی",
    phone: "09371234567",
    email: "maryam.ghasemi@example.com",
    role: "teacher",
    status: "confirmed",
  },
];

const cols = "2.5rem 6fr 7rem 8fr 6rem 3fr 4rem";

function Table() {
  return (
    <div className="pb-4 text-center text-xs xl:text-sm">
      <div className="overflow-x-auto rounded-md">
        <div role="table" className="min-w-198">
          <TableHeader cols={cols}>
            <div>#</div>
            <div>نام و نام خانوادگی</div>
            <div>شماره همراه</div>
            <div>ایمیل</div>
            <div>نقش</div>
            <div>وضعیت</div>
            <div>عملیات</div>
          </TableHeader>
          {fakeUsers.map((user, index) => (
            <TableRow cols={cols} key={user.id}>
              <div className="select-none">{index + 1}</div>
              <div className="truncate">{user.name}</div>
              <div>{user.phone}</div>
              <div className="truncate">{user.email}</div>
              <UserRole role={user.role} />
              <UserStatus status={user.status} />
              <TableAction />
            </TableRow>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Table;
