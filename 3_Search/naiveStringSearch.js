function stringSearch(str1, str2) {
  let count = 0;
  let i = 0;
  let j = 0;

  while (i < str1.length) {
    while (j < str2.length) {
      if (str2[j] === str1[i + j]) {
        j++;
      } else {
        i++;
        j = 0;
        break;
      }

      if (j == str2.length - 1) {
        count++;
        i = i + j + 1;
        j = 0;
        break;
      }
    }
  }

  return count;
}

console.log(stringSearch("nishanthnishanthantant", "ant"));
