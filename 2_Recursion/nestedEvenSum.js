//Write a recursive function called nestedEvenSum.
//Return the sum of all even numbers in an object which may contain nested objects.

function nestedEvenSum(obj) {
  let num = 0;
  for (let key in obj) {
    if ((typeof obj[key] === "number") & (obj[key] % 2 === 0)) {
      num = num + obj[key];
    }

    if (typeof obj[key] === "object") {
      num = num + nestedEvenSum(obj[key]);
    }
  }

  return num;
}

var obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup",
    },
  },
};

console.log(nestedEvenSum(obj1));
