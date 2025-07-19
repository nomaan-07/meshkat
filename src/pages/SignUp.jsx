import SignupForm from "../features/authentication/SignupForm";
import FormWrapper from "../ui/forms/FormWrapper";
import LogoTitle from "../ui/forms/LogoTitle";
import Flex from "../ui/layout/Flex";
import LoginFooterLink from "../ui/navigation/LoginFooterLink";

const SignUp = () => {
  return (
    <Flex
      direction="col"
      className="min-h-screen bg-gray-50 px-4 py-12 sm:px-6 lg:px-8"
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
