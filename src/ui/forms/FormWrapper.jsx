function FormWrapper({ children }) {
  return (
    <div className="xs:w-md mt-8 w-full rounded-lg bg-white px-2 py-8 sm:w-lg sm:px-4 lg:px-8">
      {children}
    </div>
  );
}

export default FormWrapper;
