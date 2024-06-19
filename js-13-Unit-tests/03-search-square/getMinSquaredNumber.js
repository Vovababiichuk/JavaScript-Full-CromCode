// input: arr
// output: number

export default arr => {
  if (!Array.isArray(arr) || arr.length === 0) {
    return null;
  }

  return Math.min(...arr.map(num => Math.abs(num))) ** 2;
};

// console.log(getMinSquaredNumber([-777, 3, -2, 6, 45, -20])); // 4
// console.log(getMinSquaredNumber([]));
// console.log(getMinSquaredNumber('Test'));
