import { NavLink } from "react-router-dom";
import Button from "../buttons/Button";
import Flex from "./Flex";

function AppLayout() {
  return (
    <Flex>
      <NavLink className="" to="/signup">
        <Button>ثبت نام</Button>
      </NavLink>

      <NavLink className="" to="/login">
        <Button>ورود</Button>
      </NavLink>

      <NavLink className="" to="/verification">
        <Button>وریفای کد</Button>
      </NavLink>
    </Flex>
  );
}

export default AppLayout;
