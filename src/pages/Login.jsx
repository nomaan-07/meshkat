import LogoTitle from "../ui/forms/LogoTitle";
import FormWrapper from "../ui/forms/FormWrapper";
import Flex from "../ui/layout/Flex";
import LoginForm from "../features/authentication/LoginForm";
import LoginFooterLink from "../ui/navigation/LoginFooterLink";
import LoginFooterSection from "../ui/forms/LoginFooterSection";

const Login = () => {
  return (
    <Flex
      direction="col"
      className="min-h-screen bg-gray-50 py-12 sm:px-6 lg:px-8"
    >
      <LogoTitle>ورود به حساب کاربری</LogoTitle>
      <FormWrapper>
        <LoginForm />
        <LoginFooterLink to="/signup">حساب کاربری ندارید؟</LoginFooterLink>
        <LoginFooterSection />
      </FormWrapper>
    </Flex>
  );
};

export default Login;
