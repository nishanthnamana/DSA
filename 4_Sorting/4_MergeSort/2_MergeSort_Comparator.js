function merge(arr1, arr2, comparator) {
    let newArr = [];
    let i = 0;
    let j = 0;

    while (i < arr1.length && j < arr2.length) {
        if (typeof comparator !== "function") {
            if (arr1[i] > arr2[j]) {
                newArr.push(arr2[j]);
                j++;
            } else {
                newArr.push(arr1[i]);
                i++;
            }
        } else {
            let comp = comparator(arr1[i], arr2[j]);

            if (comp < 0) {
                newArr.push(arr1[i]);
                i++;
            } else {
                newArr.push(arr2[j]);
                j++;
            }
        }
    }

    while (i < arr1.length) {
        newArr.push(arr1[i]);
        i++;
    }

    while (j < arr2.length) {
        newArr.push(arr2[j]);
        j++;
    }

    return newArr;
}

function mergeSort(arr, comparator) {
    if (arr.length <= 1) return arr;

    let midpoint = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, midpoint), comparator);
    let right = mergeSort(arr.slice(midpoint), comparator);

    return merge(left, right, comparator);
}

// -------------------------------------------------------!!
// -------------------------------------------------------!!
var names = ["Bob", "Ethel", "Christine"];
var otherNames = ["M", "Colt", "Allison", "SuperLongNameOMG"];

function stringLengthComparator(str1, str2) {
    return str1.length - str2.length;
}

console.log(merge(names, otherNames, stringLengthComparator));

// -------------------------------------------------------!!
// -------------------------------------------------------!!

var kitties = ["LilBub", "Garfield", "Heathcliff", "Blue", "Grumpy"];

function strComp(a, b) {
    if (a < b) {
        return -1;
    } else if (a > b) {
        return 1;
    }
    return 0;
}

console.log(mergeSort(kitties, strComp)); // ["Blue", "Garfield", "Grumpy", "Heathcliff", "LilBub"]

// -------------------------------------------------------!!
// -------------------------------------------------------!!

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

console.log(mergeSort(moarKittyData, oldestToYoungest)); // sorted by age in descending order
