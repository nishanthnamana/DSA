// Given an integer array nums and an integer k,
//return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.

function containNearByDuplicates(arr, k) {
    let hashMap = new Map();

    for (let i = 0; i < arr.length; i++) {
        if (i - hashMap.get(arr[i]) <= k) {
            return true;
        } else {
            hashMap.set(arr[i], i);
        }
    }

    return false;
}

console.log(containNearByDuplicates([1, 2, 3, 1, 2, 3], 2)); //false

console.log(containNearByDuplicates([1, 2, 3, 1, 2, 3], 3)); //true

console.log(containNearByDuplicates([1, 0, 1, 1], 1)); // true
