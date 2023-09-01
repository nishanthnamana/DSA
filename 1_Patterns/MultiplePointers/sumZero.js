// Return the first two numbers those sum is Zero
// If ther is not pair whose sum is Zero, return undefined.
// Use multipe pointers pattern.

function sumZero(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let sum = arr[left] + arr[right];

    if (sum === 0) {
      return [arr[left], arr[right]];
    }

    if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }

  return undefined;
}

console.log(sumZero([-4, -3, -2, 0, 1, 3, 4, 6, 7]));
console.log(sumZero([-4, -3, -2, 0, 1, 5, 6, 7]));
