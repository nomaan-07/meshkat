import { LucideArrowRight, LucideHome } from "lucide-react";
import { FaFrown } from "react-icons/fa";
import { GiPathDistance } from "react-icons/gi";
import { useNavigate } from "react-router-dom";
import Button from "../ui/buttons/Button";
import Form from "../ui/forms/Form";
import FormWrapper from "../ui/forms/FormWrapper";
import Flex from "../ui/layout/Flex";
import Heading from "../ui/layout/Heading";

const PageNotFound = () => {
  const navigate = useNavigate();

  return (
    <Form
      variation="regular"
      className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 p-5 text-center"
    >
      <FormWrapper>
        <div className="relative mb-10 inline-block">
          <span className="block text-9xl font-black tracking-wider text-blue-100">
            4 4
          </span>
          <Flex className="absolute inset-0">
            <FaFrown className="animate-bounce text-7xl text-blue-200" />
          </Flex>
        </div>

        <Flex wrap="wrap" className="mb-8">
          <GiPathDistance className="ml-3 text-4xl text-red-600" />
          <Heading as="h4" className="font-iranDemiBold text-gray-700">
            صفحه مورد نظر یافت نشد!
          </Heading>
        </Flex>

        <Flex direction="col" className="gap-4 sm:flex-row">
          <Button
            onClick={() => navigate(-1)}
            variant="danger"
            icon={LucideArrowRight}
          >
            بازگشت
          </Button>

          <Button onClick={() => navigate("/")} icon={LucideHome}>
            صفحه اصلی
          </Button>
        </Flex>
      </FormWrapper>
    </Form>
  );
};

export default PageNotFound;
