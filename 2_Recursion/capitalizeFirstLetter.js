//Write a recursive function called capitalizeFirst.
// Given an array of strings, capitalize the first letter of each string in the array.

//Using Helper Function
function capitalizeFirst(arr) {
  let result = [];

  function helper(helperArr) {
    if (helperArr.length === 0) return;

    result.push(helperArr[0][0].toUpperCase() + helperArr[0].slice(1));
    helper(helperArr.slice(1));
  }

  helper(arr);

  return result;
}

// Pure Recursion
function capitalizeFirstWord(arr) {
  if (arr.length === 0) return [];

  let newArr = [arr[0][0].toUpperCase() + arr[0].slice(1)];

  newArr = newArr.concat(capitalizeFirstWord(arr.slice(1)));

  return newArr;
}

console.log(capitalizeFirst(["prasanth", "suri", "vani"]));
console.log(capitalizeFirstWord(["nishanth", "Sai"]));
