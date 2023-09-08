// Given an integer array nums and an integer val, remove all occurrences of val in nums in-place.
// Change the array nums such that the first k elements of nums contain the elements which are not equal to val.
// The remaining elements of nums are not important as well as the size of nums.

function removeElement(arr, val) {
    let idx = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== val) {
            arr[idx] = arr[i];
            idx++;
        }
    }

    return idx;
}

console.log(removeElement([1, 2, 3, 4, 4, 5, 6, 4, 7], 4));
