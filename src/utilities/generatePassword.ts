const alpha = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numeric = "0123456789";
const special = "!@#$%^&*()_+";

const generatePassword = (
  length: number,
  hasSpecial: boolean,
  hasNumber: boolean,
  isLowercase: boolean
) => {
  let chars = alpha;
  isLowercase && (chars = alpha.toLowerCase());
  !hasSpecial && (chars += special);
  !hasNumber && (chars += numeric);
  return generate(length, chars);
};

const generate = (length: number, chars: string) => {
  let password = "";
  for (let i = 0; i < length; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return password;
};

export default generatePassword;
