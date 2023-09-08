// Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".

function longestPrefix(arr) {
    return arr.reduce((current, next) => {
        let i = 0;
        while (current[i] && next[i] && current[i] === next[i]) i++;
        return current.slice(0, i);
    });
}

console.log(longestPrefix(["flower", "flow", "flight"]));
