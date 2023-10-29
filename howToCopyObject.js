const object = {
	name: 'Roman',
	age: 30,
	prof: 'poker',
	address: {
		now: 'lalala',
		2023: 'great',
	}
}

const anotherObject = { ...object}; // с помощью спред оператора ...
const anotherObjectYet = Object.assign({}, object); // с помощью метода ассайгн

anotherObject.prof = 'it';

// console.log(object);
// console.log(anotherObject);

const dog = {
	name: 'reks',
	age: 4,
	birthDate: new Date('2021-01-01'), //дата будет коряво сериализоваться и десериализоваться
	permission: {
		canFly: false,
		canRun: true,
	},
	nullProperty: null,
	undefinedProperty: undefined, //это свойство не попадет в скопированный объект, если бы свойство было функцие тоже не скопировалось бы, JSON не умеет такое копировать
}

const jsonData = JSON.stringify(dog); //сериализация - превращает объект в строку
const anotherDog = JSON.parse(jsonData); //десериализация собирает объект из строки
//const anotherDog = JSON.parse(JSON.stringify(dog)); можно ещё вот так было короче написать
// console.log(anotherDog);

//Глубокое копирование с помощью библиотеки lodash которую с нмп скачали и воспользовались методом cloneDeep
const _ = require('lodash');

const cat = {
	name: 'keks',
	age: 4,
	birthDate: new Date('2021-01-01'), 
	permission: {
		canFly: false,
		canRun: true,
	},
	nullProperty: null,
	undefinedProperty: undefined, 
}

const anotherCat = _.cloneDeep(cat);
// console.log(anotherCat);

//Копирование с помощью встроенного метода из ECMA Script 2022 
const horse = {
	name: 'eks',
	age: 4,
	birthDate: new Date('2021-01-01'), 
	permission: {
		canFly: false,
		canRun: true,
	},
	nullProperty: null,
	undefinedProperty: undefined, 
}

const anotherHorse = structuredClone(horse);
console.log(anotherHorse);