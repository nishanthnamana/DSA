// a = [1,3,5,6,7,9,0,0,0,0]
// b = [2,4,8,12]

function mergeSortedArrays(arr1, m, arr2, n) {
    let i = m - 1;
    let j = n - 1;
    let k = m + n - 1;

    while (j >= 0) {
        if (i >= 0 && arr1[i] > arr2[j]) {
            arr1[k--] = arr1[i--];
        } else {
            arr1[k--] = arr2[j--];
        }
    }

    console.log(arr1);
}

let a = [1, 3, 5, 6, 7, 9, 0, 0, 0, 0];
let b = [2, 4, 8, 12];

mergeSortedArrays(a, 6, b, 4);
