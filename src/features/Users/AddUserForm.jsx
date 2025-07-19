import { LucideUserPlus } from "lucide-react";
import Button from "../../ui/buttons/Button";
import Form from "../../ui/forms/Form";
import Input from "../../ui/forms/Input";
import InputContainer from "../../ui/forms/InputContainer";

function AddUserForm() {
  return (
    <Form variation="auth" className="mt-2">
      <InputContainer>
        <Input type="text" name="firstName" placeholder="نام" />
        <Input type="text" name="lastName" placeholder="نام خانوادگی" />
      </InputContainer>
      <Input type="email" name="email" placeholder="ایمیل" />
      <Input type="text" name="phone" placeholder="شماره تلفن" />
      <Input type="text" name="userName" placeholder="نام کاربری" />
      <Input type="password" name="password" placeholder="رمز عبور " />
      <Button type="submit" icon={LucideUserPlus}>
        اضافه کردن کاربر جدید
      </Button>
    </Form>
  );
}

export default AddUserForm;
