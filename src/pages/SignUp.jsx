import LogoTitle from "../ui/forms/LogoTitle";
import FormWrapper from "../ui/forms/FormWrapper";
import Flex from "../ui/layout/Flex";
import LoginFooterLink from "../ui/navigation/LoginFooterLink";
import SignupForm from "../features/authentication/SignupForm";

const SignUp = () => {
  return (
    <Flex
      direction="col"
      className="min-h-screen bg-gray-50 py-12 sm:px-6 lg:px-8"
    >
      <LogoTitle>ثبت نام در سامانه</LogoTitle>
      <FormWrapper>
        <SignupForm />
        <LoginFooterLink to="/login">حساب کاربری دارید؟</LoginFooterLink>
      </FormWrapper>
    </Flex>
  );
};

export default SignUp;
