const arr = [22, 11, 4, 5, 7, 9, 2, 1, 55, 77, 88];

function quickSort(arr) {
	if (arr.length < 2) {
		return arr;
	}

	const pinIndex = Math.floor(arr.length / 2);
	const pin = arr[pinIndex];
	const less = [];
	const greater = [];

	for (let i = 0; i < arr.length; i++) {
		if (i === pinIndex) {
			continue;
		}

		if (arr[i] <= pin) {
			less.push(arr[i]);
		} else {
			greater.push(arr[i]);
		}
	}

	return [...quickSort(less), pin, ...quickSort(greater)];
}

console.log(quickSort(arr));