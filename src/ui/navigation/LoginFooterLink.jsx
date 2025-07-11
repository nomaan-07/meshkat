import { NavLink } from "react-router-dom";

function LoginFooterLink({ to, children }) {
  return (
    <div className="text-center mt-4 text-xs sm:text-sm">
      <p className="text-red-500 text-opacity-80">
        {children}
        <NavLink
          to={to}
          className="font-medium text-red-500 hover:text-opacity-100 cursor-pointer"
        >
          {to === "/login" && "ورود به حساب کاربری"}
          {to === "/signup" && "ثبت نام در سامانه"}
        </NavLink>
      </p>
    </div>
  );
}

export default LoginFooterLink;
