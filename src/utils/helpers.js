export function testValidation(value) {
  const isEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value);

  const isPhone = /^[0-9]{10,11}$/.test(value);

  return { isEmail, isPhone };
}
