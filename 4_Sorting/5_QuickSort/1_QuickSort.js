function pivotHelper(arr, start = 0, end = arr.length - 1) {
  function swap(arr, index1, index2) {
    [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
  }

  let pivot = arr[start];
  let pivotIndex = start;

  for (let i = start + 1; i <= end; i++) {
    if (pivot > arr[i]) {
      pivotIndex++;
      swap(arr, pivotIndex, i);
    }
  }

  swap(arr, start, pivotIndex);

  return pivotIndex;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (right > left) {
    let pivotIndex = pivotHelper(arr, left, right);

    quickSort(arr, left, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
}

console.log(quickSort([99, 10, 4, 45, 2, 33, 8]));
