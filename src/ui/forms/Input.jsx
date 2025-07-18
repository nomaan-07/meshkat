const baseClasses = {
  text: "appearance-none block w-full px-3 py-2.5 border shadow-xs placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary xs:text-sm transition duration-150 rounded-md",
  checkbox: "size-4 text-secondary focus:ring-primary border-slate-200",
  code: "size-12 font-iranBold text-2xl text-center border border-slate-200 rounded focus:border-primary focus:outline-none",
  search:
    "appearance-none w-full px-3 py-2.5 border border-slate-200 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary xs:text-sm transition duration-150 rounded-md bg-white",
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
    if (type === "search") return baseClasses.search;
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
          className="mb-1 block text-sm font-medium text-gray-700"
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
          className={`absolute mt-1 text-xs text-red-600 ${
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
