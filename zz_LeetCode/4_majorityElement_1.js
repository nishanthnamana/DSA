// Frequency Counter
// Given an array nums of size n, return the majority element.
// The majority element is the element that appears more than ⌊n / 2⌋ times

var majorityElement = function (nums) {
    let counter = {};
    let max = 0;
    let num;

    for (let num of nums) {
        counter[num] = ++counter[num] || 1;
    }

    for (let obj in counter) {
        if (counter[obj] > max) {
            max = counter[obj];
            num = obj;
        }
    }

    console.log(num);
    return num;
};

majorityElement([1, 2, 4, 2, 2, 1, 1, 1, 2, 2, 2, 2, 2]);
