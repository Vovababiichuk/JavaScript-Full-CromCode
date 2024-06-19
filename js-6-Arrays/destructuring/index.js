function swap(numbers) {
  const [start, ...rest] = numbers;
  return [...rest, start];
}

function swapManual(numbers) {
  let arr = [];
  for (let i of numbers) {
    arr.push(i);
  }
  const firstItemDel = arr.shift();
  arr.push(firstItemDel);
  return arr;
}

console.log(swap([1, 10, 9, 11])); // ==> [10, 9, 11, 1]
console.log(swapManual([1, 10, 9, 11])); // ==> [10, 9, 11, 1]
