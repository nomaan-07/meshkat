import Flex from "../layout/Flex";
import Heading from "../layout/Heading";
import Logo from "../navigation/Logo";

function LogoTitle({ children }) {
  return (
    <div className="sm:mx-auto sm:w-full sm:max-w-md">
      <Flex>
        <Logo />
      </Flex>
      <Heading
        as="h3"
        className="mt-6 text-center font-iranLight text-gray-900"
      >
        {children}
      </Heading>
    </div>
  );
}

export default LogoTitle;
