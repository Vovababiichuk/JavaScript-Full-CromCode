// 1. Learn requirement (WHAT?)
// 2. Create step by step algo (& input/output for functions) (HOW?) ++
// 3. Write draft solution & testing - CODE
// 4. Refactoring & final testing -> final solution

const arrAverage = arr =>
  Array.isArray(arr) ? arr.reduce((acc, curr) => acc + curr, 0) / arr.length : null;

console.log(arrAverage([2, 5, 6, 3]));
console.log(arrAverage([20, 15, 22, 5, 12, 4]));
console.log(arrAverage([-1, 50, 23, 111, 43]));
console.log(arrAverage([1, 50, 23, 76, 89, 4, 33]));
