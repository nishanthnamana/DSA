/**
Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
*/

function romanToInt(s) {
    let num = 0;

    let roman = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };

    for (let i = 0; i < s.length; i++) {
        roman[s[i]] < roman[s[i + 1]]
            ? (num -= roman[s[i]])
            : (num += roman[s[i]]);
    }

    return num;
}

console.log(romanToInt("III")); // 3
console.log(romanToInt("LVIII")); // 58
console.log(romanToInt("MCMXCIV")); // 1994
