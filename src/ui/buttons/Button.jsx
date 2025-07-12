const baseStyles =
  "flex justify-center items-center rounded-md shadow-sm w-full font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ";

const buttonTypes = {
  primary: "bg-primary hover:bg-secondary text-white",
  secondary: "bg-gray-200 hover:bg-gray-300 text-gray-800",
  danger: "bg-red-600 hover:bg-red-700 text-white",
  outline:
    "bg-transparent border border-gray-300 hover:bg-gray-50 text-gray-700",
};

const buttonSizes = {
  sm: "py-1 px-2 text-xs",
  md: "py-2 px-4 text-sm",
  lg: "py-3 px-6 text-base",
};

function Button({
  className = "",
  disabled = false,
  variant = "primary",
  size = "md",
  onClick,
  children,
  icon: Icon,
  iconPosition = "left",
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
      {iconPosition === "left" && Icon && (
        <Icon className={`${children ? "ml-2" : ""}`} />
      )}
      {children}
      {iconPosition === "right" && Icon && (
        <Icon className={`${children ? "mr-2" : ""}`} />
      )}
    </button>
  );
}

export default Button;
