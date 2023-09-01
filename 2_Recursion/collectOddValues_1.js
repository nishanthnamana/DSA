// Recursion with helper function

function collectOddValues(arr) {
  let result = [];

  function helper(helperArr) {
    if (helperArr.length === 0) return;

    if (helperArr[0] % 2 !== 0) {
      result.push(helperArr[0]);
    }

    helper(helperArr.slice(1));
  }

  helper(arr);

  return result;
}

console.log(collectOddValues([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
// [1,3,5,7,9]
