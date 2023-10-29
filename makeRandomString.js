const PASSWORD_CHARSET = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZабвгдеёжзийклмнопрстуфхцчшщьыъэюяАБВГДЕЁЖЗИЙКЛЛМНОПРСТУФХЦЧШЩЬЫЪЭЮЯ0123456789!@#$%^&*()-+=';
const PASSWORD_LENGTH = 16;

const getRandomChar = (string) => {
  const randomNumber = Math.random() * (string.length - 1);
  const randomIndex = Math.round(randomNumber);
  return string[randomIndex];
};

const makeRandomString = (charset, length) => {
  let result = '';

  while (result.length < Math.floor(length)) {
    const randomChar = getRandomChar(charset);
    result += randomChar;
  }

  return result;
};

const strongPassword = makeRandomString(PASSWORD_CHARSET, PASSWORD_LENGTH);
console.log(strongPassword);