const sumRange = (numb) => {
  if (numb === 1) return 1;
  return numb + sumRange(numb - 1);
};

console.log(sumRange(100));
