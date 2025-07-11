function Input({
  className = "",
  type = "text",
  disabled = false,
  register,
  name,
  validation,
  placeholder,
  error,
  label,
  id,
  checked, // برای چک‌باکس
  ...props
}) {
  // کلاس‌های پایه برای انواع مختلف input
  const baseClasses = {
    text: "appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm",
    checkbox:
      "h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded",
  };

  // کلاس‌های مشترک برای حالت disabled
  const disabledClasses = disabled
    ? "bg-gray-100 cursor-not-allowed opacity-70"
    : "";
  // کلاس‌های خطا (error)
  const errorClasses = error ? "border-red-500" : "border-gray-300";

  return (
    <div className={`mt-1 ${type === "checkbox" ? "flex items-center" : ""}`}>
      {/* حالت چک‌باکس */}
      {type === "checkbox" ? (
        <>
          <input
            id={id || name}
            type="checkbox"
            className={`${baseClasses.checkbox} ${disabledClasses} ${errorClasses} ${className}`}
            disabled={disabled}
            checked={checked}
            {...(register && name ? register(name, validation) : {})}
            {...props}
          />
          {label && (
            <label
              htmlFor={id || name}
              className="ml-2 block text-sm text-gray-700"
            >
              {label}
            </label>
          )}
        </>
      ) : (
        // حالت‌های دیگر (text, email, password, etc.)
        <>
          {label && (
            <label
              htmlFor={id || name}
              className="block text-sm font-medium text-gray-700"
            >
              {label}
            </label>
          )}
          <input
            id={id || name}
            className={`${baseClasses.text} ${disabledClasses} ${errorClasses} ${className}`}
            type={type}
            disabled={disabled}
            placeholder={placeholder}
            {...(register && name ? register(name, validation) : {})}
            {...props}
          />
        </>
      )}
      {/* نمایش خطا */}
      {error && <p className="mt-1 text-sm text-red-600">{error.message}</p>}
    </div>
  );
}

export default Input;
