// Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place
// The relative order of the elements should be kept the same
// Then return the number of unique elements in nums.

function removeDuplicates(arr) {
    let i = 0;
    let j = 1;

    while (j < arr.length) {
        if (arr[i] === arr[j]) {
            j++;
        } else {
            i++;
            arr[i] = arr[j];
            j++;
        }
    }

    return i;
}

console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
