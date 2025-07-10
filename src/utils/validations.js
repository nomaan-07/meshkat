export const requiredValidation = () => ({
  required: "این فیلد اجباری است",
});

export const nameValidation = (
  field = "نام کاربری",
  minLength = 4,
  maxLength = 10
) => ({
  ...requiredValidation(),
  minLength: {
    value: minLength,
    message: `${field} باید حداقل ${minLength} کاراکتر باشد`,
  },
  maxLength: {
    value: maxLength,
    message: `${field} نباید بیشتر از ${maxLength} کاراکتر باشد`,
  },
  validate: (value) => value.trim() !== "" || "این فیلد نمی‌تواند خالی باشد",
});

export const numberValidation = () => ({
  ...requiredValidation(),
  validate: (value) => Number(value) > 0 || "لطفا عدد معتبر وارد کنید",
});

export const phoneNumberValidation = () => ({
  ...requiredValidation(),
  pattern: {
    value: /^(\+98|0)?9\d{9}$/,
    message: "فرمت تلفن همراه اشتباه است",
  },
  validate: (value) => {
    const phone = value.trim();
    const normalizedPhone = phone.startsWith("+98")
      ? "0" + phone.slice(3)
      : phone.startsWith("98")
      ? "0" + phone.slice(2)
      : phone;

    return (
      /^09\d{9}$/.test(normalizedPhone) ||
      "شماره موبایل باید با 09 شروع شود و 11 رقم باشد"
    );
  },
});

export const emailValidation = () => ({
  ...requiredValidation(),
  pattern: {
    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
    message: "فرمت ایمیل نامعتبر است",
  },
  valueAsDate: false,
  valueAsNumber: false,
});

export const passwordValidation = () => ({
  ...requiredValidation(),
  minLength: {
    value: 8,
    message: "رمز عبور باید حداقل 8 کاراکتر باشد",
  },
});

export const passwordConfirmValidation = () => ({
  ...requiredValidation(),
  validate: (value, allValues) =>
    allValues["password"] === value || "رمزهای عبور مطابقت ندارند",
});

export const selectValidation = (field) => ({
  required: `لطفا ${field} را انتخاب کنید`,
});
