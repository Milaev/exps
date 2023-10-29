// const filter = {
//   'Задачи на сегодня': 3,
//   'Просроченные': 2,
//   'Выполненные': 388,
// };

// console.log(
//   Object.entries(filter)
//     .map((filterItem) => filterItem[0] + ' — ' + filterItem[1])
//     .join(', ')
// );

// Метод assign который объединяет несколько объектов
const filter = {
  'Задачи на сегодня': 3,
  'Просроченные': 2,
  'Выполненные': 388,
};

const anotherFilter = {
  'Назначенные на меня': 9,
  'Поставленные мной': 5,
};

console.log(
  Object.assign({}, filter, anotherFilter)
);