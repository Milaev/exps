let expectedUsers = 1000;

let usersByDay = [817, 581, 1370, 752, 1247, 681, 1120, 915, 875, 1341, 757, 610, 812, 741, 1139, 812, 638, 877, 1242, 1159, 1372, 1170, 845, 1289, 515, 1247, 769, 1261, 2805, 1201];

// Суммируем посещаемость
let totalUsers = 0;
for (let i = 0; i <= usersByDay.length - 1; i++) {
  totalUsers += usersByDay[i];
}

// Рассчитываем среднее значение посещаемости
let averageUsers = totalUsers / usersByDay.length;
console.log('Средняя посещаемость: ' + averageUsers);

if (averageUsers > expectedUsers) {
  console.log('Посещаемость великолепна. Продолжай в том же духе!');
} else {
  console.log('Посещаемость так себе. Нужно поднапрячься!');
}

// Сортируем массив

for (let i = 0; i <= usersByDay.length - 2; i++) {
  let minValue = usersByDay[i];

  for (let j = i + 1; j <= usersByDay.length - 1; j++) {
    if (usersByDay[j] < minValue) {
      minValue = usersByDay[j];
      let swap = usersByDay[i];
      usersByDay[i] = minValue;
      usersByDay[j] = swap;
    }
  }
}
console.log(usersByDay);

// Рассчитываем медиану

let median;
if (usersByDay.length % 2 !== 0) {
  let medianIndex = (usersByDay.length - 1) / 2;
  median = usersByDay[medianIndex];
} else {
  let leftIndex = usersByDay.length / 2 - 1;
  let rightIndex = usersByDay.length / 2;
  median = (usersByDay[leftIndex] + usersByDay[rightIndex]) / 2;
}
console.log('Медианная посещаемость: ' + median);
