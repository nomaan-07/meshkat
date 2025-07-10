function InputContainer({ children }) {
  return (
    <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2">
      {children}
    </div>
  );
}

export default InputContainer;
