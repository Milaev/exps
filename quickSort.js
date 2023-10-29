let arr = [55, 44, 22, 77, 88, 11, 33];

function getSort(a, b) {
  return a - b;
}

console.log(arr.sort(getSort));
