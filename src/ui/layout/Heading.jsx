const headingStyles = {
  h1: "text-4xl font-bold sm:text-5xl",
  h2: "text-3xl font-bold sm:text-4xl",
  h3: "text-2xl font-semibold sm:text-3xl",
  h4: "text-xl font-medium sm:text-2xl",
  h5: "text-lg font-medium sm:text-xl",
  h6: "text-base font-medium sm:text-lg",
};

function Heading({
  children,
  as = "h3", // مقدار پیش‌فرض
  className = "",
  ...props
}) {
  const Tag = as;
  const baseStyle = headingStyles[as] || headingStyles.h3;

  return (
    <Tag className={`${baseStyle} ${className}`} {...props}>
      {children}
    </Tag>
  );
}

export default Heading;
