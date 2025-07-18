const baseStyles =
  "w-full flex items-center justify-center gap-3 rounded-full px-4 py-2.5 font-medium capitalize transition-colors select-none focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary";

const buttonTypes = {
  primary: "bg-primary hover:bg-secondary text-white",
  secondary: "bg-gray-200 hover:bg-gray-300 text-gray-800",
  danger: "bg-rose-600 hover:bg-rose-700 text-white",
  outline:
    "bg-transparent border border-gray-300 hover:bg-gray-50 text-gray-700",
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
        ${buttonTypes[variant]}
        ${buttonSizes[size]}
        ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
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
