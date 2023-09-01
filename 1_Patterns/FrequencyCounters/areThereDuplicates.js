// Implement a function called, areThereDuplicates
// which accepts a variable number of arguments, and
//checks whether there are any duplicates among the arguments passed in.
//Time Complexity - O(N)

const areThereDuplicates = (...args) => {
  let fc = {};

  for (let i of args) {
    fc[i] = ++fc[i] || 1;
  }

  for (let key in fc) {
    if (fc[key] > 1) {
      return true;
    }
  }

  return false;
};

console.log(areThereDuplicates(1, 2, 3, 4, 5)); // false
console.log(areThereDuplicates(1, 2, 2)); // true
console.log(areThereDuplicates("a", "b", "c", "a")); // true
