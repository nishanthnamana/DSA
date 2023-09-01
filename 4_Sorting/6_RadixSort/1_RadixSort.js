function getDigit(num, place) {
  return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
}

function digitCount(num) {
  return Math.floor(Math.log10(num)) + 1;
}

function maxDigits(arr) {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    max = Math.max(max, digitCount(arr[i]));
  }

  return max;
}

function radixSort(arr) {
  let maxDigitsCount = maxDigits(arr);

  for (let k = 0; k < maxDigitsCount; k++) {
    let bucket = Array.from({ length: 10 }, () => []);
    for (let i = 0; i < arr.length; i++) {
      let digit = getDigit(arr[i], k);
      bucket[digit].push(arr[i]);
    }
    arr = [].concat(...bucket);
  }

  return arr;
}

console.log(radixSort([1, 44, 55, 433, 5545, 4554, 434, 34443434999]));
