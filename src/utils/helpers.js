export function convertToInternationalPhone(phone) {
  const digitsOnly = phone.replace(/\D/g, "");

  if (digitsOnly.startsWith("0")) {
    return "98" + digitsOnly.slice(1);
  }

  if (digitsOnly.startsWith("9")) {
    return "98" + digitsOnly;
  }

  return digitsOnly;
}
