function getRandomColor() {
  // Генерируем случайные значения для красного, зеленого и синего цветов
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);

  // Преобразуем значения в формат HEX
  let hex = "#" + red.toString(16) + green.toString(16) + blue.toString(16);

  return hex;
}

console.log(getRandomColor());


/*
function getRandomColor() {
  let hex = "#" + Math.floor(Math.random() * 16777216).toString(16).padStart(6, '0');
  return hex;
}
console.log(getRandomColor());

В этой оптимизированной версии мы используем одну строку кода для генерации случайного цвета в формате HEX.
Вместо генерации отдельных значений для красного, зеленого и синего цветов, мы генерируем одно случайное
число в диапазоне от 0 до 16777215 (включительно)(max значение в 16ричной системе счисления,
представленное 6 цифрами ), используя Math.random() * 16777216.
Затем мы преобразуем это число в строку в шестнадцатеричном формате с помощью .toString(16).
Для обеспечения шести символов в строке HEX мы используем .padStart(6, '0'), чтобы добавить нули
в начало строки при необходимости.
*/