import { NavLink } from "react-router-dom";

function LoginFooterLink({ to, children }) {
  return (
    <div className="mt-6 text-center text-xs sm:text-sm">
      <p className="text-slate-700">
        {children}{" "}
        <NavLink
          to={to}
          className="text-primary hover:text-opacity-100 cursor-pointer font-medium underline"
        >
          {to === "/login" && "ورود به حساب کاربری"}
          {to === "/signup" && "ثبت نام در سامانه"}
        </NavLink>
      </p>
    </div>
  );
}

export default LoginFooterLink;
