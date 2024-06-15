// 1. Learn requirement (WHAT?)
// 2. Create step by step algo (& input/output for functions) (HOW?) ++
// 3. Write draft solution & testing - CODE
// 4. Refactoring & final testing -> final solution

const sum = arr => (Array.isArray(arr) ? arr.reduce((acc, curr) => acc + curr, 0) : null);
console.log(sum([2, 5, 6, 3, 0, 3, -1]));
console.log(sum([2, -0, 6, true, -1]));
