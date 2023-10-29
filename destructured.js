// const user = {
// 	firstname: 'Roman',
// 	lastname: 'Milaev',
// 	age: 30,
// }

// const { firstname, lastname } = user;
// console.log(firstname, lastname);

//Если переменные уже существовали ранее - тогда меняется нотация

// const user = {
// 	firstname: 'Roman',
// 	lastname: 'Milaev',
// 	age: 30,
// }

// let firstname;
// let lastname;

// ({ firstname, lastname } = user); //добавляются скобки
// console.log(firstname, lastname);

//Если имя переменной не совпадает с ключом объекта
// const user = {
// 	firstname: 'Roman',
// 	lastname: 'Milaev',
// 	age: 30,
// }

// let { firstname: NAME, lastname, role = 'admin' } = user; //добавляются скобки
// console.log(NAME, lastname, role);

//Деструктуризация вложенных объектов в объект
const user = {
	firstname: 'Roman',
	lastname: 'Milaev',
	age: 30,
	permission: {
		canEdit: true,
		canDelete: false,
	}
}

const { permission: {canEdit: edit, canDelete: deleteUser } } = user; //используется вот такая нотация
console.log(edit, deleteUser);