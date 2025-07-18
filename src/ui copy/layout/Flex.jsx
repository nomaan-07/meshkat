function Flex({
  children,
  justify = "center",
  align = "center",
  direction = "row",
  className = "",
  wrap = "nowrap",
  gap,
  ...props
}) {
  const justifyClasses = {
    start: "justify-start",
    end: "justify-end",
    center: "justify-center",
    between: "justify-between",
    around: "justify-around",
    evenly: "justify-evenly",
  };

  const alignClasses = {
    start: "items-start",
    end: "items-end",
    center: "items-center",
    baseline: "items-baseline",
    stretch: "items-stretch",
  };

  const directionClasses = {
    row: "flex-row",
    "row-reverse": "flex-row-reverse",
    col: "flex-col",
    "col-reverse": "flex-col-reverse",
  };

  const wrapClasses = {
    nowrap: "flex-nowrap",
    wrap: "flex-wrap",
    "wrap-reverse": "flex-wrap-reverse",
  };

  return (
    <div
      className={`
        flex
        ${justifyClasses[justify] || justifyClasses.center}
        ${alignClasses[align] || alignClasses.center}
        ${directionClasses[direction] || directionClasses.row}
        ${wrapClasses[wrap] || wrapClasses.nowrap}
        ${(gap && `gap-${gap}`) || "gap-0"}
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  );
}

export default Flex;
