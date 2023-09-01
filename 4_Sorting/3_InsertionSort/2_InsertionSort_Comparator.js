function insertionSort(arr, comparator = null) {
    for (let i = 1; i < arr.length; i++) {
        let currentVal = arr[i];
        let j;

        if (typeof comparator !== "function") {
            for (j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
                arr[j + 1] = arr[j];
            }
        } else {
            for (j = i - 1; j >= 0 && comparator(arr[j], currentVal) > 0; j--) {
                arr[j + 1] = arr[j];
            }
        }
        arr[j + 1] = currentVal;
    }

    return arr;
}

console.log(insertionSort([2, 1, 9, 76, 4]));

var moarKittyData = [
    {
        name: "LilBub",
        age: 7,
    },
    {
        name: "Garfield",
        age: 40,
    },
    {
        name: "Heathcliff",
        age: 45,
    },
    {
        name: "Blue",
        age: 1,
    },
    {
        name: "Grumpy",
        age: 6,
    },
];

function oldestToYoungest(a, b) {
    return b.age - a.age;
}

console.log(insertionSort(moarKittyData, oldestToYoungest));
