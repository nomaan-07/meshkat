import { useState, useRef, useEffect } from "react";

import Form from "../ui/forms/Form";
import FormWrapper from "../ui/forms/FormWrapper";
import Flex from "../ui/layout/Flex";
import Heading from "../ui/layout/Heading";
import Paragraph from "../ui/common/Paragraph";
import Button from "../ui/buttons/Button";
import { FiCheck } from "react-icons/fi";
import Input from "../ui/forms/Input";
import ResendCodeButton from "../ui/buttons/ResendCodeButton ";
import { useVerifyNumber } from "../features/authentication/useVerifyNumber";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { getCookie } from "../utils/cookies";
import Link from "../ui/common/Link";
import EditPhoneNumber from "../ui/forms/EditPhoneNumber";

const VerificationCodeForm = () => {
  const { verifyNumber, isPending } = useVerifyNumber();
  const { handleSubmit } = useForm();
  const [code, setCode] = useState(Array(6).fill(""));
  const [isValid, setIsValid] = useState(false);
  const inputRefs = useRef([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const userPhoneNumber = getCookie("user_phone" || "new_phone");

  useEffect(() => {
    setIsValid(code.every((num) => num !== "") && code.length === 6);
  }, [code]);

  const handleChange = (e, index) => {
    const value = e.target.value;

    if (/^\d*$/.test(value) && value.length <= 1) {
      const newCode = [...code];
      newCode[index] = value;
      setCode(newCode);

      if (value && index < 5) {
        inputRefs.current[index + 1]?.focus();
      }
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !code[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    } else if (e.key === "ArrowLeft" && index > 0) {
      inputRefs.current[index - 1]?.focus();
    } else if (e.key === "ArrowRight" && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  function onSubmit() {
    const fullCode = code.join("");
    if (fullCode.length === 6) {
      verifyNumber(fullCode);
    } else {
      toast.error("لطفاً کد ۶ رقمی را کامل وارد کنید");
    }
  }

  function handleOpenModal() {
    setIsModalOpen(true);
  }

  function handleCloseModal() {
    setIsModalOpen(false);
  }

  return (
    <Flex
      direction="col"
      className="min-h-screen bg-gray-50 py-12 sm:px-6 lg:px-8"
    >
      <FormWrapper>
        <Form onSubmit={handleSubmit(onSubmit)} variation="regular">
          <Heading
            className="mt-6 text-center font-iranLight text-gray-900"
            as="h3"
          >
            تایید شماره موبایل
          </Heading>

          <Paragraph
            color="gray-600"
            fontSize="sm"
            align="center"
            margin="mb-6"
          >
            {`کد ۶ رقمی ارسال شده به شماره ${userPhoneNumber}+ را وارد کنید.`}
          </Paragraph>

          <Flex dir="ltr" gap={2} className="mb-6 ">
            {code.map((digit, index) => (
              <Input
                key={index}
                type="text"
                inputMode="numeric"
                maxLength={1}
                value={digit}
                onChange={(e) => handleChange(e, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                ref={(el) => el && (inputRefs.current[index] = el)}
                className="size-12 font-iranBold text-2xl text-center border border-gray-300 rounded focus:border-primary focus:outline-none"
              />
            ))}
          </Flex>

          <Button type="submit" icon={FiCheck} disabled={!isValid || isPending}>
            {isPending ? "در حال ورود..." : "تایید و ادامه"}
          </Button>

          <ResendCodeButton />

          <Link onClick={handleOpenModal}>تغییر شماره</Link>
        </Form>
        <EditPhoneNumber isOpen={isModalOpen} onClose={handleCloseModal} />
      </FormWrapper>
    </Flex>
  );
};

export default VerificationCodeForm;
