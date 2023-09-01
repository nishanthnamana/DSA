// countUniqueValues function accepts sorted array.
// count the unique values in the array.
// There can be negative values in the array but it will always be sorted.

function countUniqueValues(arr) {
  if (arr.length === 0) {
    return 0;
  }

  if (arr.length === 1) {
    return 1;
  }

  let i = 0;
  let j = 1;

  while (j < arr.length) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
      j++;
    } else {
      j++;
    }
  }

  return i + 1;
}

console.log(countUniqueValues([1, 1, 1, 1, 1, 2]));
console.log(countUniqueValues([1, 1, 2, 2, 3, 4]));
console.log(countUniqueValues([1, 5, 7, 11, 11, 12, 12, 12, 12, 12, 12, 13]));
