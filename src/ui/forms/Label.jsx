const BaseLabelStyles =
  "hover:text-slate-600 ml-3 text-sm text-right cursor-pointer";

function Label({ htmlFor, children, className = "" }) {
  return (
    <label className={`${BaseLabelStyles} ${className}`} htmlFor={htmlFor}>
      {children}
    </label>
  );
}

export default Label;
