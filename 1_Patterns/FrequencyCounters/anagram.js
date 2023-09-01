// anagram: A word, phrase or name formed by rearranging the letters.
// Ex: cinema, iceman

function validAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  let fc = {};

  for (let char of str1) {
    fc[char] = ++fc[char] || 1;
  }

  for (let char of str2) {
    if (!fc[char]) {
      return false;
    } else {
      fc[char] = --fc[char];
    }
  }

  return true;
}

console.log(validAnagram("anagram", "nagaram"));
console.log(validAnagram("texttwisttime", "timetwisttext"));
console.log(validAnagram("cat", "rat"));
