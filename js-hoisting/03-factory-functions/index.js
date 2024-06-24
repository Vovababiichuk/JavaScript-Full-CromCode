const createArrayOfFunctions = num => {
  if (num === undefined) {
    return [];
  }

  if (typeof num !== 'number') {
    return null;
  }

  return Array(num)
    .fill()
    .map((_, index) => () => index);
};

console.log(createArrayOfFunctions(9)[5]());
console.log(createArrayOfFunctions(9)[-0]());
console.log(createArrayOfFunctions());
console.log(createArrayOfFunctions('TEST'));
