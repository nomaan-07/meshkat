import { useForm } from "react-hook-form";
import Form from "../../ui/forms/Form";
import Input from "../../ui/forms/Input";
import { emailOrPhoneValidation } from "../../utils/validations";
import Button from "../../ui/buttons/Button";
import { FaSignInAlt } from "react-icons/fa";

function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form submitted:", data);
  };

  return (
    <Form type="regular" onSubmit={handleSubmit(onSubmit)}>
      <Input
        type="phone"
        register={register}
        name="phone"
        placeholder="ایمیل یا شماره موبایل"
        validation={emailOrPhoneValidation()}
        error={errors?.phone}
      />

      <Button type="submit" icon={FaSignInAlt}>
        ورود به حساب
      </Button>
    </Form>
  );
}

export default LoginForm;
