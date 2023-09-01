// countUniqueValues function accepts sorted array.
// count the unique values in the array.
// There can be negative values in the array but it will always be sorted.

function countUniqueValues(arr) {
  if (arr.length === 0) {
    return 0;
  }

  let fc = {};

  for (let key of arr) {
    fc[key] = ++fc[key] || 1;
  }

  let keys = Object.keys(fc);

  return keys.length;
}

console.log(countUniqueValues([1, 1, 1, 1, 1, 2]));
console.log(countUniqueValues([1, 1, 2, 2, 3, 4]));
console.log(countUniqueValues([1, 5, 7, 11, 11, 12, 12, 12, 12, 12, 12, 13]));
