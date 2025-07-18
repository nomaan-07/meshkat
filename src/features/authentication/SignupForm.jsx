import { LucideUserPlus } from "lucide-react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Button from "../../ui/buttons/Button";
import Form from "../../ui/forms/Form";
import Input from "../../ui/forms/Input";
import InputContainer from "../../ui/forms/InputContainer";
import Label from "../../ui/forms/Label";
import Flex from "../../ui/layout/Flex";
import { setCookie } from "../../utils/cookies";
import { convertToInternationalPhone } from "../../utils/helpers";
import {
  checkboxValidation,
  emailValidation,
  nameValidation,
  passwordValidation,
  phoneNumberValidation,
  requiredValidation,
} from "../../utils/validations";
import { useSignup } from "./useSignup";

function SignupForm() {
  const { signup, isPending } = useSignup();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
  });

  function onSubmit(data) {
    const userData = {
      fname: data.firstName,
      lname: data.lastName,
      username: data.userName,
      password: data.password,
      phone: convertToInternationalPhone(data.phone),
      email: data.email,
    };
    setCookie("user_phone", convertToInternationalPhone(data.phone));
    signup(userData);
  }

  return (
    <Form variation="auth" onSubmit={handleSubmit(onSubmit)}>
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
        type="text"
        register={register}
        name="phone"
        placeholder="شماره تلفن"
        validation={phoneNumberValidation()}
        error={errors?.phone}
      />

      <Input
        type="text"
        register={register}
        name="userName"
        placeholder="نام کاربری"
        validation={nameValidation()}
        error={errors?.userName}
      />

      <Input
        type="password"
        register={register}
        name="password"
        placeholder="رمز عبور "
        validation={passwordValidation()}
        error={errors?.password}
      />

      <Button type="submit" disabled={isPending} icon={LucideUserPlus}>
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
          با <Link className="text-primary underline">قوانین و مقررات</Link>{" "}
          سایت موافقم.
        </Label>
      </Flex>
    </Form>
  );
}

export default SignupForm;
