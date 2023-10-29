let usersByDay = [4, 2, 1, 3];
console.log(usersByDay);

let currentIndex = 0;
let minValue = usersByDay[currentIndex];

for (let j = currentIndex + 1; j <= usersByDay.length - 1; j++) {
  if (usersByDay[j] < minValue) {
    minValue = usersByDay[j];
    console.log('Новый минимальный элемент: ' + minValue);
  }
}
console.log('Минимальный элемент: ' + minValue);