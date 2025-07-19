import { LucideGraduationCap, LucideSettings, LucideUser } from "lucide-react";

const baseStyles =
  "flex items-center gap-1 text-xs w-fit px-2 rounded-md select-none";
const iconStyles = "size-3.5";
const roles = {
  admin: "bg-amber-100 text-amber-600",
  teacher: "bg-blue-100 text-primary",
  student: "bg-emerald-100 text-emerald-600",
};

function UserRole({ role = "student" }) {
  const styles = `${baseStyles} ${roles[role]}`;

  return (
    <div className="text-xs">
      {role === "admin" && (
        <div className={styles}>
          <LucideSettings className={iconStyles} />
          <span>ادمین</span>
        </div>
      )}
      {role === "teacher" && (
        <div className={styles}>
          <LucideGraduationCap className={iconStyles} />
          <span>استاد</span>
        </div>
      )}
      {role === "student" && (
        <div className={styles}>
          <LucideUser className={iconStyles} />
          <span>دانشجو</span>
        </div>
      )}
    </div>
  );
}

export default UserRole;
