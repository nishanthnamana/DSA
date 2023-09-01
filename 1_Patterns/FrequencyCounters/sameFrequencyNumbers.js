// Write a function called sameFrequency.
// Given two positive integers, find out if the two numbers have the same frequency of digits.
// Time Complexity: O(n)

const sameFrequency = (num1, num2) => {
  num1 = num1 + "";
  num2 = num2 + "";

  if (num1.length !== num2.length) {
    return false;
  }

  let fc = {};

  for (let num of num1) {
    fc[num] = ++fc[num] || 1;
  }

  for (let num of num2) {
    if (!fc[num]) {
      return false;
    } else {
      fc[num]--;
    }
  }

  return true;
};

console.log(sameFrequency(182, 281));
console.log(sameFrequency(34, 14));
