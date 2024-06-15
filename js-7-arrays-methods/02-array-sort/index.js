// 1. Learn requirement (WHAT?)
// 2. Create step by step algo (& input/output for functions) (HOW?) ++
// 3. Write draft solution & testing - CODE
// 4. Refactoring & final testing -> final solution

// input: []
// output: []

const sortDesc = arr => arr.slice().sort((a, b) => b - a);

console.log(sortDesc([3, 5, 6, 2, 78, 45, 33, 89, 9]));
console.log(sortDesc([3, 5, 6, 2, 'test', 45, 33, -1, 9]));
console.log(sortDesc([3 + 3, 5, 6, 2, true, 45, 33, -1, 0]));
console.log(sortDesc([3 + '45', 5, 6, 2, true, 45, 33, -1, 0]));
