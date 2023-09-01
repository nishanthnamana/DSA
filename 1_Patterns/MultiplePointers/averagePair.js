//Write a function called averagePair.
//Given a sorted array of integers and a target average,
//determine if there is a pair of values in the array where the average of the pair
//equals the target average.
//Time Complexity: O(N)

function averagePair(arr, avg) {
  if (arr.length === 0) {
    return false;
  }

  let left = 0;
  let right = arr.length - 1;

  while (right > left) {
    let average = (arr[left] + arr[right]) / 2;

    if (average === avg) {
      return true;
    } else if (average > avg) {
      --right;
    } else {
      ++left;
    }
  }

  return false;
}

console.log(averagePair([1, 2, 3], 2.5)); //True

console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)); //True

console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1)); // false
console.log(averagePair([], 4)); // false
