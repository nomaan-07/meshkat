import { NavLink } from "react-router-dom";
import Button from "../buttons/Button";
import Flex from "./Flex";

function AppLayout() {
  return (
    <Flex>
      <NavLink to="/signup">
        <Button>ثبت نام</Button>
      </NavLink>

      <NavLink to="/login">
        <Button>ورود</Button>
      </NavLink>

      <NavLink to="/verification">
        <Button>وریفای کد</Button>
      </NavLink>

      <NavLink to="/spinner">
        <Button>اسپینر</Button>
      </NavLink>
    </Flex>
  );
}

export default AppLayout;
