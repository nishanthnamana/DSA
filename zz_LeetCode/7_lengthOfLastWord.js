// Given a string s consisting of words and spaces, return the length of the last word in the string.

function lengthOfLastWord(s) {
    let lastWord = s.trim().split(" ").pop();

    return lastWord.length;
}

console.log(lengthOfLastWord("This is a Test String Nishanth")); // 8
