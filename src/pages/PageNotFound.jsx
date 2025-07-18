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
      className="min-h-screen bg-gradient-to-br text-center from-blue-50 via-purple-50 to-pink-50 flex items-center justify-center p-5"
    >
      <FormWrapper>
        <div className="relative inline-block mb-10">
          <span className="text-9xl font-black text-blue-100 block tracking-wider">
            4 4
          </span>
          <Flex className="absolute inset-0">
            <FaFrown className="text-7xl text-blue-200 animate-bounce" />
          </Flex>
        </div>

        <Flex wrap="wrap" className="mb-8">
          <GiPathDistance className="text-4xl text-red-600 ml-3" />
          <Heading as="h4" className="text-gray-700 font-iranDemiBold">
            صفحه مورد نظر یافت نشد!
          </Heading>
        </Flex>

        <Flex direction="col" className="sm:flex-row gap-4">
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
