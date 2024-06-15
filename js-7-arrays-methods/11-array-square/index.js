// 1. Learn requirement (WHAT?)
// 2. Create step by step algo (& input/output for functions) (HOW?) ++
// 3. Write draft solution & testing - CODE
// 4. Refactoring & final testing -> final solution

function squareArray(arr) {
  return Array.isArray(arr) ? arr.map(el => el ** 2) : null;
}

// examples
console.log(squareArray([10, 10, 10])); // ===> [100, 100, 100]
console.log(squareArray([0, 0, 1, 3])); // ===> [0, 0, 1, 9]
console.log(squareArray([-1, 0, -1, 1])); // ===> [1, 0, 1, 1]
