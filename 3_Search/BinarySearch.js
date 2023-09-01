//Write a function called binarySearch which accepts a sorted array
//and a value and returns the index at which the value exists. Otherwise, return -1

function binarySearch(arr, num) {
  let left = 0;
  let right = arr.length - 1;

  while (right >= left) {
    let center = Math.floor((left + right) / 2);
    let number = arr[center];

    if (number == num) return center;
    else if (number > num) right = center - 1;
    else left = center + 1;
  }

  return -1;
}

console.log(binarySearch([1, 2, 3, 4, 5], 2));
