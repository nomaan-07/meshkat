function FormWrapper({ children }) {
  return (
    <div className="bg-white py-8 px-2 sm:px-4 rounded-lg lg:px-8 mt-8 w-full xs:w-md sm:w-lg">
      {children}
    </div>
  );
}

export default FormWrapper;
