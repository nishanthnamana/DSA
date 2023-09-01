const swap = (arr, index1, index2) => {
    [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
};

function bubbleSort(arr, comparator = null) {
    let noSwap = false;

    for (let i = arr.length - 1; i > 0; i--) {
        noSwap = true;

        for (let j = 0; j < i; j++) {
            if (typeof comparator !== "function") {
                if (arr[j] > arr[j + 1]) {
                    swap(arr, j, j + 1);
                    noSwap = false;
                }
            } else {
                let comp = comparator(arr[j], arr[j + 1]);

                if (comp > 0) {
                    swap(arr, j, j + 1);
                    noSwap = false;
                }
            }
        }

        if (noSwap) break;
    }

    return arr;
}

console.log(bubbleSort([10, 1, 2, 3, 4, 5, 6, 7, 8, 9]));

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

console.log(bubbleSort(moarKittyData, oldestToYoungest));
