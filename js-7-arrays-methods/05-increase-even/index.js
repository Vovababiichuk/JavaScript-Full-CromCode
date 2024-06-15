// 1. Learn requirement (WHAT?)
// 2. Create step by step algo (& input/output for functions) (HOW?) ++
// 3. Write draft solution & testing - CODE
// 4. Refactoring & final testing -> final solution

const increaseEvenEl = (arr, delta) => {
  if (Array.isArray(arr)) {
    return arr.map(el => (el % 2 === 0 ? el + delta : el));
  }
  return null;
};

console.log(increaseEvenEl([2, 5, 6, 8, 11, 9, 4], 20));
console.log(increaseEvenEl([2, true, 6, -8, 'test', 9, 4], 10));
console.log(increaseEvenEl([2, 3 + 1, 6, -8, 'test', 9, 4], 10));
