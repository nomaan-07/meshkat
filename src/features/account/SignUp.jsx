import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

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
    <div
      dir="rtl"
      className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8"
    >
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex justify-center">
          <div className="w-20 h-20 rounded-ful flex items-center justify-center text-white text-2xl font-bold">
            <img src="logo.png" alt="" />
          </div>
        </div>
        <h2 className="mt-6 text-center font-iranBold text-3xl font-extrabold text-gray-900">
          ثبت نام در سامانه
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2">
              <div>
                <div className="mt-1">
                  <input
                    id="firstName"
                    {...register("firstName", { required: "نام الزامی است" })}
                    type="text"
                    placeholder="نام"
                    className={`appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${
                      errors.firstName ? "border-red-300" : "border-gray-300"
                    }`}
                  />
                  {errors.firstName && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.firstName.message}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <div className="mt-1">
                  <input
                    id="lastName"
                    {...register("lastName", {
                      required: "نام خانوادگی الزامی است",
                    })}
                    type="text"
                    placeholder="نام خانوادگی"
                    className={`appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${
                      errors.lastName ? "border-red-300" : "border-gray-300"
                    }`}
                  />
                  {errors.lastName && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.lastName.message}
                    </p>
                  )}
                </div>
              </div>
            </div>

            <div>
              <div className="mt-1">
                <input
                  id="email"
                  {...register("email", {
                    required: "ایمیل الزامی است",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "آدرس ایمیل معتبر نیست",
                    },
                  })}
                  type="email"
                  placeholder="ایمیل"
                  className={`appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${
                    errors.email ? "border-red-300" : "border-gray-300"
                  }`}
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.email.message}
                  </p>
                )}
              </div>
            </div>

            <div>
              <div className="mt-1">
                <input
                  id="phone"
                  {...register("phone", {
                    required: "شماره تلفن الزامی است",
                    pattern: {
                      value: /^[0-9]{10,11}$/,
                      message: "شماره تلفن معتبر نیست",
                    },
                  })}
                  placeholder="شماره تلفن"
                  type="tel"
                  className={`placeholder:text-right appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${
                    errors.phone ? "border-red-300" : "border-gray-300"
                  }`}
                />
                {errors.phone && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.phone.message}
                  </p>
                )}
              </div>
            </div>

            <div>
              <div className="mt-1">
                <input
                  id="username"
                  {...register("username", {
                    required: "نام کاربری الزامی است",
                    minLength: {
                      value: 4,
                      message: "نام کاربری باید حداقل 4 کاراکتر باشد",
                    },
                  })}
                  placeholder="نام کاربری"
                  type="text"
                  className={`appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${
                    errors.username ? "border-red-300" : "border-gray-300"
                  }`}
                />
                {errors.username && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.username.message}
                  </p>
                )}
              </div>
            </div>

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
                  to="/Login"
                  className="font-medium text-red-500 hover:text-opacity-100"
                >
                  ورود به حساب کاربری
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
