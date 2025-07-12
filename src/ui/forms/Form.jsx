const baseStyles =
  "xs:text-base space-y-4 rounded-2xl text-xs select-none sm:space-y-8 bg-white";

const formTypes = {
  modal: "xs:max-w-122 max-h-screen min-w-60 xs:min-w-86 md:w-150 md:max-w-150",
  regular: "space-y-6",
  auth: "w-70 xs:w-75 p-4",
};

function Form({
  children,
  onSubmit,
  variation = "modal",
  className = "",
  ...props
}) {
  const formClassName = `${baseStyles} ${
    formTypes[variation] || formTypes.modal
  } ${className}`;

  return (
    <form onSubmit={onSubmit} className={formClassName.trim()} {...props}>
      {children}
    </form>
  );
}

export default Form;
