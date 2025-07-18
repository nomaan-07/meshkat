import { LucideLogOut } from "lucide-react";
import Button from "../../ui/buttons/Button";

function Logout() {
  return (
    <Button variant="danger" icon={LucideLogOut}>
      <span>خروج از حساب کاربری</span>
    </Button>
  );
}

export default Logout;
