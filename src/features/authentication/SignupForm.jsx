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
import { useSignup } from "./useSignup";
import { useEffect } from "react";

function SignupForm() {
  const { signup, isPending } = useSignup();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
  });

  const onSubmit = (data) => {};

  useEffect(() => {
    console.log("Errors:", errors);
  }, [errors]);

  return (
    <Form type="regular" onSubmit={handleSubmit(onSubmit)}>
      <InputContainer>
        <Input
          type="text"
          register={register}
          name="firstName"
          placeholder="نام"
          validation={requiredValidation()}
          error={errors?.firstName}
        />
        <Input
          type="text"
          register={register}
          name="lastName"
          placeholder="نام خانوادگی"
          validation={requiredValidation()}
          error={errors?.lastName}
        />
      </InputContainer>
      <Input
        type="email"
        register={register}
        name="email"
        placeholder="ایمیل"
        validation={emailValidation()}
        error={errors?.email}
      />
      <Input
        type="phone"
        register={register}
        name="phone"
        placeholder="شماره تلفن"
        validation={phoneNumberValidation()}
        error={errors?.phone}
      />
      <Input
        type="password"
        register={register}
        name="password"
        placeholder="رمز عبور "
        validation={passwordValidation()}
        error={errors?.password}
      />

      <Button type="submit" disabled={isPending} icon={FaUserPlus}>
        {isPending ? "در حال ثبت نام..." : "ثبت نام"}
      </Button>

      <Flex justify="start" className="relative">
        <Input
          type="checkbox"
          register={register}
          name="terms"
          validation={checkboxValidation()}
          error={errors?.terms}
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
