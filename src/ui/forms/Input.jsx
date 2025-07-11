function Input({
  className = "",
  type = "text",
  disabled = false,
  register,
  name,
  id = name,
  validation,
  placeholder,
  error,
  label,
  ...props
}) {
  const baseClasses = {
    text: "appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm",
    checkbox:
      "h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded",
  };

  const disabledClasses = disabled
    ? "bg-gray-100 cursor-not-allowed opacity-70"
    : "";
  const errorClasses = error ? "border-red-500" : "border-gray-300";

  const registerProps = register && name ? register(name, validation) : {};

  return (
    <div className={`mt-1 ${type === "checkbox" ? "flex items-center" : ""}`}>
      {type === "checkbox" ? (
        <>
          <input
            id={id}
            type="checkbox"
            className={`${baseClasses.checkbox} ${disabledClasses} ${errorClasses} ${className}`}
            disabled={disabled}
            {...registerProps}
            {...props}
          />
          {label && (
            <label htmlFor={id} className="ml-2 block text-sm text-gray-700">
              {label}
            </label>
          )}
        </>
      ) : (
        <>
          {label && (
            <label
              htmlFor={id}
              className="block text-sm font-medium text-gray-700"
            >
              {label}
            </label>
          )}
          <input
            id={id}
            className={`${baseClasses.text} ${disabledClasses} ${errorClasses} ${className}`}
            type={type}
            disabled={disabled}
            placeholder={placeholder}
            {...registerProps}
          />
        </>
      )}
      {error && (
        <p
          className={`mt-1 text-xs text-red-600 absolute ${
            name === "terms" && "-bottom-[15px]"
          }`}
        >
          {error.message}
        </p>
      )}
    </div>
  );
}

export default Input;
