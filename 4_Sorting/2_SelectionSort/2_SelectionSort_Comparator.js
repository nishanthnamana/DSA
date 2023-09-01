function swap(arr, index1, index2) {
    [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
}

function selectionSort(arr, comparator = null) {
    for (let i = 0; i < arr.length; i++) {
        let min = i;

        for (let j = i + 1; j < arr.length; j++) {
            if (typeof comparator !== "function") {
                if (arr[min] > arr[j]) {
                    min = j;
                }
            } else {
                let comp = comparator(arr[min], arr[j]);
                if (comp > 0) {
                    min = j;
                }
            }
        }

        if (min !== i) swap(arr, min, i);
    }

    return arr;
}

console.log(selectionSort([76, 34, 88, 12, 96, 21]));

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

console.log(selectionSort(moarKittyData, oldestToYoungest));
