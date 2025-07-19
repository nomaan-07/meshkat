import { LucideLogIn } from "lucide-react";
import { useForm } from "react-hook-form";
import Button from "../../ui/buttons/Button";
import Form from "../../ui/forms/Form";
import Input from "../../ui/forms/Input";
import { convertToInternationalPhone } from "../../utils/helpers";
import { emailOrPhoneValidation } from "../../utils/validations";
import { useLogin } from "./useLogin";

function LoginForm() {
  const { login, isPending } = useLogin();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function onSubmit(data) {
    const userData = { identifier: convertToInternationalPhone(data.phone) };
    login(userData);
    console.log("Form submitted:", data);
  }

  return (
    <Form variation="auth" onSubmit={handleSubmit(onSubmit)}>
      <Input
        type="text"
        register={register}
        name="phone"
        placeholder="ایمیل یا شماره موبایل"
        validation={emailOrPhoneValidation()}
        error={errors?.phone}
      />

      <Button type="submit" disabled={isPending} icon={LucideLogIn}>
        {isPending ? "در حال ورود ..." : "ورود به حساب"}
      </Button>
    </Form>
  );
}

export default LoginForm;
