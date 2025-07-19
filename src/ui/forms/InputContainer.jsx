function InputContainer({ children }) {
  return (
    <div className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
      {children}
    </div>
  );
}

export default InputContainer;
