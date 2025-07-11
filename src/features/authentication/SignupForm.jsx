import { Link } from "react-router-dom";
import Form from "../../ui/forms/Form";
import {
  checkboxValidation,
  emailValidation,
  passwordValidation,
  phoneNumberValidation,
  requiredValidation,
} from "../../utils/validations";
import Input from "../../ui/forms/Input";
import InputContainer from "../../ui/forms/InputContainer";
import Button from "../../ui/buttons/Button";
import { FaUserPlus } from "react-icons/fa";
import Label from "../../ui/forms/Label";
import Flex from "../../ui/layout/Flex";
import { useForm } from "react-hook-form";

function SignupForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log("Form submitted:", data);
    // ارسال داده به سرور
  };
  return (
    <Form type="regular" onSubmit={handleSubmit(onSubmit)}>
      <InputContainer>
        <Input
          type="text"
          register={register}
          id="firstName"
          placeholder="نام"
          validation={requiredValidation()}
        />
        <Input
          type="text"
          register={register}
          id="lastName"
          placeholder="نام خانوادگی"
          validation={requiredValidation()}
        />
      </InputContainer>
      <Input
        type="email"
        register={register}
        id="email"
        placeholder="ایمیل"
        validation={emailValidation()}
      />
      <Input
        type="phone"
        register={register}
        id="phone"
        placeholder="شماره تلفن"
        validation={phoneNumberValidation()}
      />
      <Input
        type="password"
        register={register}
        id="password"
        placeholder="رمز عبور "
        validation={passwordValidation()}
      />

      <Button icon={FaUserPlus}>ثبت نام</Button>

      <Flex justify="start">
        <Input
          type="checkbox"
          register={register}
          id="terms"
          validation={checkboxValidation()}
          className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded ml-2 cursor-pointer"
        />
        <Label htmlFor="terms" className="text-sm">
          با
          <Link className="underline"> قوانین و مقررات </Link>
          سایت موافقم
        </Label>
      </Flex>
    </Form>
  );
}

export default SignupForm;
