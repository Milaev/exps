// let numbers = [1, 2, 8, 3, 4, 5];
// numbers[5] = 6;
// numbers[3] = 44;
// function getSort (a, b) {
//   return a - b;
// };

// numbers.sort(getSort);
// console.log(numbers);

// const films = ['dhdd', 'ddjdjjd', 'ieiei'];
// const copyOfFilms = films;

// console.log(films === copyOfFilms); //true

// const films = ['dhdd', 'ddjdjjd', 'ieiei'];
// const copyOfFilms = films.slice();

// console.log(films === copyOfFilms); //false
///////////////////////////////////////////////////////////////
// const fruits = ['banana', 'apple', 'lemon', 'orange'];

// fruits.forEach((value, index, array) => {
//   console.log(value);
// });

// Выведет в консоль:
//   'banana'
//   'apple'
//   'lemon'
//   'orange'


const films = [
  {
    id: 0,
    title: 'Die hard',
  },
  {
    id: 1,
    title: 'Terminator',
  },
];

const titles = [];

films.forEach((film, index) => {
  titles[index] = film.title;
});

console.log(titles); // ["Die hard", "Terminator"]

//Метод array1.concat(array2[, array3]) - склеивание двух и более массивов в один
const ivanFavoriteFilms = ['Die hard', 'Terminator'];
const mariaFavoriteFilms = ['Kindergarten Cop'];

const favoriteFilms = ivanFavoriteFilms.concat(mariaFavoriteFilms);

console.log(favoriteFilms); // ['Die hard', 'Terminator', 'Kindergarten Cop']

//Метод array.reverse() - переворачивает массив в обратном порядке
const numbers = [0, 1, 2, 3, 4];
const reversedNumbers = numbers.reverse();

console.log(reversedNumbers); // [4, 3, 2, 1, 0]
console.log(numbers); // [4, 3, 2, 1, 0]
console.log(numbers === reversedNumbers); // true
//Такие методы ещё называют мутирующими, и чтобы избежать неожиданных мутаций используют метод .slice()
const numbers = [0, 1, 2, 3, 4];
const reversedNumbers = numbers.slice().reverse();

console.log(reversedNumbers); // [4, 3, 2, 1, 0]
console.log(numbers); // [0, 1, 2, 3, 4]
console.log(numbers === reversedNumbers); // false