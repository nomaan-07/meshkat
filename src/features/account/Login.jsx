import React from "react";
import { useForm } from "react-hook-form";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { testValidation } from "../../utils/helpers";
import { Link } from "react-router-dom";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form submitted:", data);
  };

  const handleGoogleLogin = () => {
    console.log("Google login clicked");
  };

  const handleGithubLogin = () => {
    console.log("GitHub login clicked");
  };

  return (
    <div
      dir="rtl"
      className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8 font-sans"
    >
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex justify-center">
          <div className="w-20 h-20 rounded-full flex items-center justify-center text-white text-2xl font-bold">
            <img src="logo.png" alt="" />
          </div>
        </div>
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          ورود به حساب کاربری
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <div className="mt-1">
                <input
                  id="emailOrPhone"
                  {...register("emailOrPhone", {
                    required: "لطفا ایمیل یا شماره موبایل خود را وارد کنید",
                    validate: (value) => {
                      const isEmail = testValidation(value).isEmail;
                      const isPhone = testValidation(value).isPhone;

                      return (
                        isEmail ||
                        isPhone ||
                        "لطفا یک ایمیل یا شماره موبایل معتبر وارد کنید"
                      );
                    },
                  })}
                  type="text"
                  placeholder="ایمیل یا شماره موبایل"
                  className={`appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-right ${
                    errors.emailOrPhone ? "border-red-300" : "border-gray-300"
                  }`}
                />
                {errors.emailOrPhone && (
                  <p className="mt-1 text-sm text-red-600 text-right">
                    {errors.emailOrPhone.message}
                  </p>
                )}
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                ورود به حساب
              </button>
            </div>
          </form>

          <div className="text-center mt-4 text-sm" dir="rtl">
            <p className="text-red-500 text-opacity-80">
              حساب کاربری ندارید؟{" "}
              <Link
                to="/sign-up"
                className="font-medium text-red-500 hover:text-opacity-100"
              >
                ثبت نام کنید
              </Link>
            </p>
          </div>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">
                  ورود همراه با
                </span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <div>
                <button
                  onClick={handleGoogleLogin}
                  className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  <FaGoogle className="h-5 w-5 text-red-600" />
                  <span className="mr-2">گوگل</span>
                </button>
              </div>

              <div>
                <button
                  onClick={handleGithubLogin}
                  className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  <FaGithub className="h-5 w-5 text-gray-800" />
                  <span className="mr-2">گیت‌هاب</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
