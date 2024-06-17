const getTotalPrice = arr => {
  const sum = arr.reduce((acc, curr) => acc + curr, 0);
  return '$' + (Math.floor(sum * 100) / 100).toFixed(2);
};

console.log(getTotalPrice([2, 45, 6.7, -1, 6, 0, 8.5, 3, 2.3]));
