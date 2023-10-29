function makeSizer(size) {
  return function () {
    document.body.style.fontSize = size + "px";
  };
}

var size12 = makeSizer(12);
var size14 = makeSizer(14);
var size16 = makeSizer(16);

// Теперь size12, size14, и size16 - это функции, которые меняют размер текста в элементе body на значения
//  12, 14, и 16 пикселов, соответственно.
//  После чего мы цепляем эти функции на кнопки примерно так:
// document.getElementById("size-12").onclick = size12;
// document.getElementById("size-14").onclick = size14;
// document.getElementById("size-16").onclick = size16;

/* в HTML вот так свяжем по id
 <a href="#" id="size-12">12</a>
<a href="#" id="size-14">14</a>
<a href="#" id="size-16">16</a> */


/*
  ЗАДАЧА:
  Напишите функцию-генератор для получения уникальных идентификаторов.
*/

function createIdGenerator () {
  let lastGeneratedId = 0;

  return function () {
    lastGeneratedId += 1;
    return lastGeneratedId;
  };
}

const generatePhotoId = createIdGenerator();
const generateCommentId = createIdGenerator();

console.log(generatePhotoId()); // 1
console.log(generatePhotoId()); // 2
console.log(generateCommentId()); // 1
console.log(generatePhotoId()); // 3

// Универсальность такого подхода в том, что мы можем создавать столько генераторов, сколько нам нужно. 
// И они не будут мешать друг другу, у каждого генератора будет своя переменная lastGeneratedId со значением.

// Поэтому идентификаторы, созданные generateCommentId(), начинаются с единицы и не сбивают счёт generatePhotoId().

/*
  ЗАДАЧА:
  Напишите функцию-генератор для получения уникальных идентификаторов
  из указанного диапазона, и так, чтобы они не повторялись,
  пока не будут перебраны все числа из этого промежутка.
*/

function getRandomInteger (min, max) {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;
	// используется функция Math.random(), которая генерирует случайное число от 0 (включительно) до 1 (исключительно).
	//  Затем это случайное число умножается на разницу между верхней и нижней границами диапазона (upper - lower + 1),
	//   а затем к результату прибавляется нижняя граница (lower).
	// Таким образом, выражение Math.random() * (upper - lower + 1) + lower генерирует случайное число в диапазоне 

  return Math.floor(result);
}

function createRandomIdFromRangeGenerator (min, max) {
  const previousValues = [];

  return function () {
    let currentValue = getRandomInteger(min, max);
    if (previousValues.length >= (max - min + 1)) {
      console.error('Перебраны все числа из диапазона от ' + min + ' до ' + max);
      return null;
    }
    while (previousValues.includes(currentValue)) {
      currentValue = getRandomInteger(min, max);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
}

const generatePhotoId = createRandomIdFromRangeGenerator(1, 3);

console.log(generatePhotoId());
console.log(generatePhotoId());
console.log(generatePhotoId());
console.log(generatePhotoId()); // Получим ошибку в консоли и null в качестве значения

// Данный код представляет собой реализацию функции createRandomIdFromRangeGenerator, которая возвращает
// другую функцию для генерации случайных идентификаторов в заданном диапазоне.
// 1. В начале кода определена функция getRandomInteger, которая генерирует случайное целое число в заданном диапазоне.
// Она используется внутри функции createRandomIdFromRangeGenerator.
// 2. Функция createRandomIdFromRangeGenerator принимает два аргумента min и max, которые представляют нижнюю 
// и верхнюю границы диапазона.
// 3. Внутри функции createRandomIdFromRangeGenerator создается массив previousValues, который будет хранить предыдущие
// сгенерированные значения.
// 4. Затем функция возвращает другую функцию, которая будет генерировать случайные идентификаторы.
// 5. Внутри возвращаемой функции сначала генерируется случайное значение currentValue с помощью вызова функции
//  getRandomInteger(min, max).
// 6. Затем проверяется, есть ли уже сгенерированное значение currentValue в массиве previousValues. Если есть,
//  то генерируется новое значение currentValue до тех пор, пока оно не станет уникальным.
// 7. Если массив previousValues содержит все возможные значения в диапазоне от min до max, то выводится 
// сообщение об ошибке и возвращается значение null.
// 8. Если значение currentValue уникально, оно добавляется в массив previousValues.
// 9. Возвращается значение currentValue.
// 10. В конце кода создается переменная generatePhotoId, которая вызывает функцию createRandomIdFromRangeGenerator 
// с аргументами 1 и 3. Это позволяет генерировать случайные идентификаторы в диапазоне от 1 до 3.
// 11. Затем вызывается функция generatePhotoId два раза, и результаты выводятся в консоль с помощью console.log().