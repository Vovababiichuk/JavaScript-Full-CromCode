// input: arr
// output: copy arr
export const getEvenNumbers = arr => arr.filter(num => num % 2 === 0);

console.log(getEvenNumbers([1, 2, 3, 4, 5, 88, 45, 66]));
