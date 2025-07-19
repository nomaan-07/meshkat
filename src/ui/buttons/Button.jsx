const baseStyles =
  "w-full flex items-center justify-center gap-3 rounded-md px-4 py-2.5 font-medium transition-colors select-non";

const buttonVariations = {
  primary: "bg-primary hover:bg-secondary text-white",
  secondary:
    "bg-slate-100 hover:bg-slate-200 text-slate-800 md:hover:text-primary border border-slate-200",
  danger: "bg-rose-600 hover:bg-rose-700 text-white",
  outline:
    "bg-transparent border border-slate-300 hover:bg-slate-50 text-slate-700",
  pagination:
    "bg-slate-100 md:bg-white md:hover:bg-slate-200 text-slate-800 md:hover:text-primary text-sm",
};

const buttonSizes = {
  xs: "text-xs",
  sm: "text-sm",
  base: "text-base",
};

function Button({
  className = "",
  disabled = false,
  variant = "primary",
  size = "base",
  onClick,
  children,
  icon: Icon,
  type = "button",
}) {
  const styles = ` ${baseStyles}
        ${buttonVariations[variant]}
        ${buttonSizes[size]}
        ${disabled ? "opacity-50 cursor-not-allowed" : "md:cursor-pointer"}
        ${className}`;

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      type={type}
      className={styles}
    >
      {Icon && <Icon className="size-5" />}
      {children}
    </button>
  );
}

export default Button;
