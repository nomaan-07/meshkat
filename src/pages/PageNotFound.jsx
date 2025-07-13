import { useNavigate } from "react-router-dom";
import { FaHome, FaArrowLeft, FaFrown } from "react-icons/fa";
import { GiPathDistance } from "react-icons/gi";
import Button from "../ui/buttons/Button";
import Heading from "../ui/layout/Heading";
import Flex from "../ui/layout/Flex";
import Form from "../ui/forms/Form";
import FormWrapper from "../ui/forms/FormWrapper";

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

        <Flex direction="col" gap={5} className="sm:flex-row">
          <Button onClick={() => navigate("/")}>
            <FaHome />
            صفحه اصلی
          </Button>

          <Button onClick={() => navigate(-1)} variant="danger">
            بازگشت به صفحه قبل
            <FaArrowLeft />
          </Button>
        </Flex>
      </FormWrapper>
    </Form>
  );
};

export default PageNotFound;
