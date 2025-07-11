import { FaGithub, FaGoogle } from "react-icons/fa";
import Button from "../buttons/Button";

function LoginFooterSection() {
  const handleGoogleLogin = () => {
    console.log("Google login clicked");
  };

  const handleGithubLogin = () => {
    console.log("GitHub login clicked");
  };

  return (
    <div className="mt-6">
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-300"></div>
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-2 bg-white text-gray-500">ورود همراه با</span>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-3">
        <Button variant="outline" onClick={handleGoogleLogin}>
          <FaGoogle className="h-5 w-5 text-red-600" />
          <span className="mr-2">گوگل</span>
        </Button>

        <Button variant="outline" onClick={handleGithubLogin}>
          <FaGithub className="h-5 w-5 text-gray-800" />
          <span className="mr-2">گیت‌هاب</span>
        </Button>
      </div>
    </div>
  );
}

export default LoginFooterSection;
