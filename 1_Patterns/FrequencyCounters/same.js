// function same
// accepts 2 arrays
// Return true, if every value in array has it corresponding value squared in second array.

const same = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }

  let fc1 = {};
  let fc2 = {};

  for (let l of arr1) {
    fc1[l] = ++fc1[l] || 1;
  }

  for (let l of arr2) {
    fc2[l] = ++fc2[l] || 1;
  }

  for (let key in fc1) {
    if (!(key ** 2 in fc2)) {
      return false;
    }

    if (fc1[key] !== fc2[key ** 2]) {
      return false;
    }
  }

  return true;
};

console.log(same([1, 2, 3, 4], [16, 4, 9, 1]));

//O(n)
