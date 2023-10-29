function isPalindrome(string) {
  // Удаляем все пробелы и приводим строку к нижнему регистру
  const formattedString = string.replace(/\s/g, '').toLowerCase();

  // разделяем символы, переворачиваем строку и соединяем
  const reversedString = formattedString.split('').reverse().join('');

  // Сравниваем исходную строку с перевернутой строкой
  return formattedString === reversedString;
}

// Пример использования функции
const string1 = "А роза упала на лапу Азора";
console.log(isPalindrome(string1)); // Выведет true

const string2 = "Hello, world!";
console.log(isPalindrome(string2)); // Выведет false
