function Flex({ children, type = "center", className = "", dir }) {
  const justifyClasses = {
    center: "justify-center",
    between: "justify-between",
    vertical: "flex-col",
  };

  return (
    <div
      dir={dir}
      className={`flex items-center ${
        justifyClasses[type] || justifyClasses.center
      } ${className}`}
    >
      {children}
    </div>
  );
}

export default Flex;
