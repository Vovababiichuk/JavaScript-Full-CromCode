const sumOfSquares = (...rest) => {
  return [...rest].reduce((acc, curr) => acc + curr ** 2, 0);
};

console.log(sumOfSquares(1, 23, 45, 3, 6, 78));
