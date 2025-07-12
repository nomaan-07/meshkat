const baseClasses = {
  text: "appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition duration-150",
  checkbox:
    "h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded",
  code: "w-12 h-12 text-2xl text-center border border-gray-300 rounded focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200",
};

const Input = ({
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
  inputMode = "text",
  autoFocus = false,
  maxLength,
  onChange,
  onKeyDown,
  ref,
  ...props
}) => {
  const getInputClass = () => {
    if (type === "checkbox") return baseClasses.checkbox;
    if (type === "code") return baseClasses.code;
    return baseClasses.text;
  };

  const disabledClasses = disabled
    ? "bg-gray-100 cursor-not-allowed opacity-70"
    : "";
  const errorClasses = error
    ? "border-red-500 focus:border-red-500 focus:ring-red-200"
    : "border-gray-300";
  const registerProps = register && name ? register(name, validation) : {};

  return (
    <div
      className={`relative ${type === "checkbox" ? "flex items-center" : ""}`}
    >
      {/* Label */}
      {label && type !== "checkbox" && (
        <label
          htmlFor={id}
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          {label}
        </label>
      )}

      {/* Input */}
      <input
        id={id}
        className={`${getInputClass()} ${disabledClasses} ${errorClasses} ${className}`}
        type={type}
        disabled={disabled}
        placeholder={placeholder}
        inputMode={inputMode}
        autoFocus={autoFocus}
        maxLength={maxLength}
        onChange={onChange}
        onKeyDown={onKeyDown}
        ref={ref}
        {...registerProps}
        {...props}
      />

      {/* Checkbox Label */}
      {type === "checkbox" && label && (
        <label htmlFor={id} className="ml-2 block text-sm text-gray-700">
          {label}
        </label>
      )}

      {/* Error Message */}
      {error && (
        <p
          className={`mt-1 text-xs text-red-600 absolute ${
            name === "terms" && "top-[15px] w-max"
          }`}
        >
          {error.message}
        </p>
      )}
    </div>
  );
};

export default Input;
