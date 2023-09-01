//Write a function called findLongestSubstring,
//which accepts a string and returns the length of the
//longest substring with all distinct characters.
//Time Complexity - O(n)

function findLongestSubstring(str) {
  let obj = {};
  let start = 0;
  let length = 0;

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (obj[char]) {
      start = Math.max(start, obj[char]);
    }

    length = Math.max(length, i - start + 1);
    obj[char] = i + 1;
  }

  return length;
}

// console.log(findLongestSubstring("rithmschool")); // 7
// console.log(findLongestSubstring("bbbbbbbbb")); // 1
// console.log(findLongestSubstring("")); // 0
console.log(findLongestSubstring("thecatinthehat")); // 7
