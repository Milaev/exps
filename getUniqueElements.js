function getUniqueElements(array) {

	const uniqueElements = [];

	for (let i = 0; i < array.length; i++) {
		if (!uniqueElements.includes(array[i])) {
			uniqueElements.push(array[i]);
		}
	}

	return uniqueElements;
}

const row = [1, 2, 2, 2, 3, 4, 4, 4, 4, 5, 0, 5, 6, 5, 4, 0];
console.log(getUniqueElements(row));