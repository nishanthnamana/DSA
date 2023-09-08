// Looping
// Given an array nums of size n, return the majority element.
// The majority element is the element that appears more than ⌊n / 2⌋ times

function majorityElement(arr) {
    let numb = 0;
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        if (count === 0) {
            numb = arr[i];
            count++;
        } else if (numb === arr[i]) {
            count++;
        } else {
            count--;
        }
    }

    console.log(numb);
    return numb;
}

majorityElement([1, 2, 4, 2, 2, 1, 1, 1, 2, 2, 2, 2, 2]);
