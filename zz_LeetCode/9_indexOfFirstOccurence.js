// Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

function indexOfFirstOccurence(haystack, needle) {
    let i;
    for (i = 0; i < haystack.length - needle.length + 1; i++) {
        if (haystack[i] === needle[0]) {
            for (let j = 0; j < needle.length; j++) {
                if (needle[j] !== haystack[j + i]) {
                    break;
                } else if (j === needle.length - 1) {
                    return i;
                }
            }
        }
    }

    return -1;
}

console.log(indexOfFirstOccurence("leetcode", "etc")); // 2
