import Flex from "../layout/Flex";
import Heading from "../layout/Heading";
import Logo from "../navigation/Logo";

function LogoTitle({ title }) {
  return (
    <div className="sm:mx-auto sm:w-full sm:max-w-md">
      <Flex>
        <Logo />
      </Flex>
      <Heading as="h3" className="mt-6 text-center font-iranBold text-gray-900">
        {title}
      </Heading>
    </div>
  );
}

export default LogoTitle;
