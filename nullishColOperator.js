function getSomething(option) {
	const result = option || 'Wassap!';
	return result;
}

console.log(getSomething('')); //выведет Wassap!
console.log(getSomething(28)); //выведет 28
console.log(getSomething('hello!')); //выведет hello!
console.log(getSomething(null)); //выведет Wassap!
console.log(getSomething(undefined)); //выведет Wassap!
console.log(getSomething(0)); //выведет Wassap!

function getSome(option) {
	const result = option ?? 'Wassap!'; //возвращающий значение правого операнда, если значение левого операнда содержит null или undefined, в противном случае возвращается значение левого операнда.
	return result;
}

console.log(getSome('')); //выведет пустую строку
console.log(getSome(28)); //выведет 28
console.log(getSome('hello!')); //выведет hello!
console.log(getSome(null)); //выведет Wassap!
console.log(getSome(undefined)); //выведет Wassap!
console.log(getSome(0)); //выведет 0