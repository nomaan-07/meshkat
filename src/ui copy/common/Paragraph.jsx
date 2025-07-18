function Paragraph({
  text,
  color = "gray-800",
  fontSize = "base",
  fontWeight = "normal",
  align = "left",
  padding = "p-0",
  margin = "m-0",
  customClasses = "",
  truncate = false,
  hoverEffect = false,
  responsiveSettings = {},
  children,
}) {
  const baseClasses = `
    text-${color}
    text-${fontSize}
    font-${fontWeight}
    text-${align}
    ${padding}
    ${margin}
    ${truncate ? "truncate" : ""}
    ${hoverEffect ? "transition duration-300 hover:opacity-80" : ""}
    ${customClasses}
  `;

  const responsiveClasses = Object.entries(responsiveSettings)
    .map(([breakpoint, settings]) => {
      return Object.entries(settings)
        .map(([property, value]) => {
          if (property === "fontSize" && value === "xs") value = "xs";
          return `${breakpoint}:${property}-${value}`;
        })
        .join(" ");
    })
    .join(" ");

  return (
    <p className={`${baseClasses} ${responsiveClasses}`}>{text || children}</p>
  );
}

export default Paragraph;
