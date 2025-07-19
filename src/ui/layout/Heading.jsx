const headingStyles = {
  h1: "text-4xl font-iranBold sm:text-5xl",
  h2: "text-3xl font-iranBold sm:text-4xl",
  h3: "text-2xl font-iranDemiBold sm:text-3xl",
  h4: "text-xl font-iranMedium sm:text-2xl",
  h5: "text-lg font-iranMedium sm:text-xl",
  h6: "text-base font-iranMedium sm:text-lg",
};

function Heading({ children, as = "h3", className = "", ...props }) {
  const Tag = as;
  const baseStyle = headingStyles[as] || headingStyles.h3;

  return (
    <Tag className={`${baseStyle} ${className}`} {...props}>
      {children}
    </Tag>
  );
}

export default Heading;
