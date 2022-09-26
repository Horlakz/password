"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const alpha = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numeric = "0123456789";
const special = "!@#$%^&*()_+";
const generatePassword = (length, hasSpecial, hasNumber, isLowercase) => {
    let chars = alpha;
    isLowercase && (chars = alpha.toLowerCase());
    !hasSpecial && (chars += special);
    !hasNumber && (chars += numeric);
    return generate(length, chars);
};
const generate = (length, chars) => {
    let password = "";
    for (let i = 0; i < length; i++) {
        password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return password;
};
exports.default = generatePassword;
