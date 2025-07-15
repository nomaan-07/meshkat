import Flex from "../layout/Flex";

const baseStyles = "text-sm font-iranLight underline cursor-pointer";

function Link({ onClick, children, className }) {
  return (
    <Flex>
      <a onClick={onClick} className={`${baseStyles} ${className}`}>
        {children}
      </a>
    </Flex>
  );
}

export default Link;
