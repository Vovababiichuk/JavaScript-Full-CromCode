// 1. Learn requirement (WHAT?)
// 2. Create step by step algo (& input/output for functions) (HOW?) ++
// 3. Write draft solution & testing - CODE
// 4. Refactoring & final testing -> final solution

const reverseArray = arr => (Array.isArray(arr) ? arr.slice().reverse(arr) : null);
console.log(reverseArray([1, 2, 3, 4, 5]));
