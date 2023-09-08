// Given an integer array nums and an integer val, remove all occurrences of val in nums in-place.
// Change the array nums such that the first k elements of nums contain the elements which are not equal to val.
// The remaining elements of nums are not important as well as the size of nums.

function removeElements(arr, val) {
    let left = 0;
    let right = arr.length - 1;

    while (right >= left) {
        if (arr[right] === val) {
            right--;
        } else if (arr[left] === val) {
            [arr[right], arr[left]] = [arr[left], arr[right]];
            left++;
            right--;
        } else {
            left++;
        }
    }

    return left;
}

console.log(removeElements([1, 2, 3, 4, 4, 5, 6, 4, 7], 4));
