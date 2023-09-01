//Write a function factorial
//which accepts a number and returns the factorial of that number.
//A factorial is the product of an integer and all the integers below it;
// e.g., factorial four ( 4! ) is equal to 24

function factorial(number) {
  if (number === 0) return 1;
  if (number === 1) return 1;
  return number * factorial(number - 1);
}

console.log(factorial(4));
