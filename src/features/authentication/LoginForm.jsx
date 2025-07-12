import { useForm } from "react-hook-form";
import Form from "../../ui/forms/Form";
import Input from "../../ui/forms/Input";
import { emailOrPhoneValidation } from "../../utils/validations";
import Button from "../../ui/buttons/Button";
import { FaSignInAlt } from "react-icons/fa";
import { useLogin } from "./useLogin";

function LoginForm() {
  const { login, isPending } = useLogin();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form submitted:", data);
  };

  return (
    <Form variation="regular" onSubmit={handleSubmit(onSubmit)}>
      <Input
        type="phone"
        register={register}
        name="phone"
        placeholder="ایمیل یا شماره موبایل"
        validation={emailOrPhoneValidation()}
        error={errors?.phone}
      />

      <Button type="submit" disabled={isPending} icon={FaSignInAlt}>
        {isPending ? "در حال ورود ..." : "ورود به حساب"}
      </Button>
    </Form>
  );
}

export default LoginForm;
