// 1. Learn requirement (WHAT?)
// 2. Create step by step algo (& input/output for functions) (HOW?) ++
// 3. Write draft solution & testing - CODE
// 4. Refactoring & final testing -> final solution

// input: [[], []]
// output: []

// const flatArray = arr =>
//   arr
//     .slice()
//     .flat(Infinity)
//     .sort((a, b) => a - b);

const flatArray = arr => arr.reduce((acc, cur) => acc.concat(cur), []).sort((a, b) => a - b);

console.log(flatArray([2, 45, [56, 8], 34, [45, 'test']]));
console.log(flatArray([2, 45, [56, 8], 34, true, false, [45, 'test']]));
console.log(flatArray([2, 45, [56, 8], 34, [true, [3, 8]], false, [45, 'test']]));
console.log(flatArray([2, 45, [56, -4], [45 + 'test']]));
