//O(n)

const addUpTo = (n) => {
  let total = 0;

  for (let i = 0; i <= n; i++) {
    total = total + i;
  }

  return total;
};

const t1 = performance.now();
addUpTo(1000000000);
const t2 = performance.now();

console.log(t2 - t1);
// Takes ~1.5sec for a billion
