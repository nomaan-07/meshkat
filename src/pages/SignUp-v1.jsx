import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import LogoTitle from "../ui/forms/LogoTitle";
import Form from "../ui/forms/Form";
import {
  emailValidation,
  nameValidation,
  phoneNumberValidation,
  requiredValidation,
} from "../utils/validations";
import Input from "../ui/forms/Input";
import InputContainer from "../ui/forms/InputContainer";
import FormWrapper from "../ui/forms/FormWrapper";
import Flex from "../ui/layout/Flex";

const RegistrationForm = () => {
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
    <Flex
      dir="rtl"
      className="min-h-screen bg-gray-50 py-12 sm:px-6 lg:px-8"
      type="vertical"
    >
      <LogoTitle title="ثبت نام در سامانه" />

      <FormWrapper>
        <Form type="regular" onSubmit={handleSubmit(onSubmit)}>
          <InputContainer>
            <Input
              type="firstName"
              register={register}
              field="firstName"
              id="firstName"
              placeholder="نام"
              validation={requiredValidation()}
            />
            <Input
              type="lastName"
              register={register}
              field="lastName"
              id="lastName"
              placeholder="نام خانوادگی"
              validation={requiredValidation()}
            />
          </InputContainer>
          <Input
            type="email"
            register={register}
            field="email"
            id="email"
            placeholder="ایمیل"
            validation={emailValidation()}
          />
          <Input
            type="phone"
            register={register}
            field="phone"
            id="phone"
            placeholder="شماره تلفن"
            validation={phoneNumberValidation()}
          />
          <Input
            type="username"
            register={register}
            field="username"
            id="username"
            placeholder="شماره "
            validation={nameValidation()}
          />

          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              ثبت نام
            </button>
          </div>

          <div className="flex items-start" dir="rtl">
            <div className="flex items-center h-5">
              <input
                id="terms"
                name="terms"
                type="checkbox"
                {...register("terms", {
                  required: "لطفاً با قوانین موافقت کنید",
                })}
                className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded ml-2"
              />
            </div>
            <div className="ml-3 text-sm text-right">
              <label htmlFor="terms" className="font-medium text-gray-700">
                با{" "}
                <a href="#" className="text-indigo-600 hover:text-indigo-500">
                  قوانین و مقررات
                </a>{" "}
                سایت موافقم
              </label>
            </div>
          </div>

          <div className="text-center mt-4 text-sm" dir="rtl">
            <p className="text-red-500 text-opacity-80">
              حساب کاربری دارید؟{" "}
              <Link
                to="/login"
                className="font-medium text-red-500 hover:text-opacity-100"
              >
                ورود به حساب کاربری
              </Link>
            </p>
          </div>
        </Form>
      </FormWrapper>
    </Flex>
  );
};

export default RegistrationForm;
