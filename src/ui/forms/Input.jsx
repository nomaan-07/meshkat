// const styles =
//   "appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm";

// function Input({
//   className,
//   type,
//   disabled = false,
//   register,
//   field,
//   id,
//   validation,
//   placeholder,
// }) {
//   if (disabled) {
//     return (
//       <div className="mt-1">
//         <input
//           className={`${styles} ${className}`}
//           type={type}
//           disabled={disabled}
//           placeholder={placeholder}
//         />
//       </div>
//     );
//   }

//   if (register && field) {
//     return (
//       <div className="mt-1">
//         <input
//           className={`${styles} ${className}`}
//           type={type}
//           id={id}
//           {...register(field, validation)}
//         />
//       </div>
//     );
//   }

//   return null;
// }

// export default Input;

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
  ...props
}) {
  const baseClasses =
    "appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm";

  return (
    <div className="mt-1">
      {label && (
        <label
          htmlFor={name}
          className="block text-sm font-medium text-gray-700"
        >
          {label}
        </label>
      )}
      <input
        className={`${baseClasses} ${
          disabled ? "bg-gray-100 cursor-not-allowed" : ""
        } ${className} ${error ? "border-red-500" : "border-gray-300"}`}
        type={type}
        disabled={disabled}
        placeholder={placeholder}
        {...(register && name ? register(name, validation) : {})}
        {...props}
      />
      {error && <p className="mt-1 text-sm text-red-600">{error.message}</p>}
    </div>
  );
}
export default Input;
