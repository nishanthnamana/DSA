//Write a function called isSubsequence
//which takes in two strings and checks whether the characters in the
//first string form a subsequence of the characters in the second string.
//In other words, the function should check whether the characters in the
//first string appear somewhere in the second string, without their order changing.
//Time Complexity: O(N+M)

function isSubsequence(str1, str2) {
  let p1 = 0;
  let p2 = 0;

  while (p2 < str2.length) {
    if (str1[p1] === str2[p2]) {
      ++p1;
      ++p2;
    } else {
      ++p2;
    }

    if (p1 === str1.length) {
      return true;
    }
  }

  return false;
}

console.log(isSubsequence("hello", "hello world")); // true
console.log(isSubsequence("sing", "sting")); // true
console.log(isSubsequence("abc", "abracadabra")); // true
console.log(isSubsequence("abc", "acb")); // false
