let arr = [4, 2, 1, 3, 6, 4, 1, 8, 99];

for (let i = 0; i <= arr.length - 2; i++) {
  let minValue = arr[i];

  for (let j = i + 1; j <= arr.length - 1; j++) {
    if (arr[j] < minValue) {
      minValue = arr[j];
      let swap = arr[i];
      arr[i] = minValue;
      arr[j] = swap;
    }
  }
}
console.log(arr);
