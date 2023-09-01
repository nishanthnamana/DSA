// Implement a function called, areThereDuplicates
// which accepts a variable number of arguments, and
//checks whether there are any duplicates among the arguments passed in.
//Time Complexity - O(N)

const areThereDuplicates = (...args) => {
  let arr = args.sort();

  let left = 0;
  let right = 1;

  while (right < arr.length) {
    if (arr[left] === arr[right]) {
      return true;
    } else {
      ++left;
      ++right;
    }
  }

  return false;
};

console.log(areThereDuplicates(1, 2, 3, 4, 5)); // False
console.log(areThereDuplicates(1, 2, 2)); // True
console.log(areThereDuplicates("a", "b", "c", "a")); // True
