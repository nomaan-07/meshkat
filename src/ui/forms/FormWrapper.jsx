function FormWrapper({ children }) {
  return (
    <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10 mt-8 sm:mx-auto w-full sm:max-w-md">
      {children}
    </div>
  );
}

export default FormWrapper;
