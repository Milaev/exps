
function getMaxValue(array) {
	if (array.length === 0) {
		return null;
	}

	let maxValue = array[0];

	for (let i = 1; i < array.length; i++) {
		if (array[i] > maxValue) {
			maxValue = array[i];
		}
	}
	return maxValue;
}

const array = [5, -5, 444];
console.log(getMaxValue(array));
