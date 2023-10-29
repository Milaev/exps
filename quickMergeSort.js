function mergeSort(arr) {
	// Базовый случай: если массив содержит менее двух элементов, он уже отсортирован
	if (arr.length <= 1) {
			return arr;
	}

	// Разделение массива на две половины
	const middle = Math.floor(arr.length / 2);
	const leftHalf = arr.slice(0, middle);
	const rightHalf = arr.slice(middle);

	// Рекурсивно сортируем каждую половину
	const sortedLeftHalf = mergeSort(leftHalf);
	const sortedRightHalf = mergeSort(rightHalf);

	// Объединение отсортированных половин в один отсортированный массив
	return merge(sortedLeftHalf, sortedRightHalf);
}

function merge(leftArr, rightArr) {
	let mergedArr = [];
	let leftIndex = 0;
	let rightIndex = 0;

	// Сравниваем элементы из левого и правого массивов и добавляем их в объединенный массив
	while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
			if (leftArr[leftIndex] < rightArr[rightIndex]) {
					mergedArr.push(leftArr[leftIndex]);
					leftIndex++;
			} else {
					mergedArr.push(rightArr[rightIndex]);
					rightIndex++;
			}
	}

	// Добавляем оставшиеся элементы из левого и правого массивов
	mergedArr = mergedArr.concat(leftArr.slice(leftIndex)).concat(rightArr.slice(rightIndex));

	return mergedArr;
}

// Пример использования
const arr = [5, 3, 8, 4, 2];
console.log(mergeSort(arr));
